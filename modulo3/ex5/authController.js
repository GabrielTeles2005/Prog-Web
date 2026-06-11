const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registrar = async (req, res) => {

    try {

        const usuario = await Usuario.create(req.body);

        res.status(201).json(usuario);

    } catch (error) {

        res.status(400).json({
            erro: error.message
        });

    }

};

exports.login = async (req, res) => {

    try {

        const { email, senha } = req.body;

        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(401).json({
                erro: 'Credenciais inválidas'
            });
        }

        const senhaValida = await bcrypt.compare(
            senha,
            usuario.senha
        );

        if (!senhaValida) {
            return res.status(401).json({
                erro: 'Credenciais inválidas'
            });
        }

        const token = jwt.sign(
            { id: usuario._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({ token });

    } catch (error) {

        res.status(500).json({
            erro: error.message
        });

    }

};