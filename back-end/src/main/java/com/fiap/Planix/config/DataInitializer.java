package com.fiap.Planix.config;

import com.fiap.Planix.model.User;
import com.fiap.Planix.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;

@Component
public class DataInitializer implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(DataInitializer.class);

    @Autowired
    private UserRepository usuarioRepository;

    @Override
    public void run(String... args) throws Exception {
        // Verifica se já existem usuários Padrão
        if (usuarioRepository.findByEmail("teste@gmail.com").isEmpty()) {
            logger.info("Nenhum usuário padrão encontrado. Criando usuário padrão...");

            User userPadrao = new User();

            userPadrao.setName("Usuário Padrão");
            userPadrao.setEmail("teste@gmail.com");

            userPadrao.setPassword("senha123");

            OffsetDateTime now = OffsetDateTime.now(ZoneOffset.UTC);
            userPadrao.setCreatedAt(now);
            userPadrao.setUpdatedAt(now);

            usuarioRepository.save(userPadrao);

            logger.info("======================================================================");
            logger.info("Usuário padrão criado com sucesso.");
            logger.info("Login: teste@gmail.com");
            logger.info("Senha: senha123");
            logger.info("Por favor, altere esta senha em produção!");
            logger.info("======================================================================");
        } else {
            logger.info("Usuário já existe. Inicializador de dados ignorado.");
        }
    }
}