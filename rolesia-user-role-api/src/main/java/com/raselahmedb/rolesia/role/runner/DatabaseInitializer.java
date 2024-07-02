package com.raselahmedb.rolesia.role.runner;

import com.raselahmedb.rolesia.role.model.Hierarchy;
import com.raselahmedb.rolesia.role.model.Role;
import com.raselahmedb.rolesia.role.model.User;
import com.raselahmedb.rolesia.role.security.oauth2.OAuth2Provider;
import com.raselahmedb.rolesia.role.service.RoleService;
import com.raselahmedb.rolesia.role.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Component
public class DatabaseInitializer implements CommandLineRunner {

    private final UserService userService;
    private final RoleService roleService;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (!userService.getUsers().isEmpty()) {
            return;
        }
        ROLES.forEach(roleService::save);
        USERS.forEach(user -> {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userService.saveUser(user);
        });
        log.info("Database initialized");
    }

    private static final List<User> USERS = Arrays.asList(
            new User("admin", "admin", "Admin", "admin@mycompany.com", new Role(1L, "Admin", null, Hierarchy.ADMIN), null, OAuth2Provider.LOCAL, "1"),
            new User("user", "user", "User", "user@mycompany.com", new Role(2L, "User", null, Hierarchy.USER), null, OAuth2Provider.LOCAL, "2")
    );

    private static final List<Role> ROLES = Arrays.asList(
            new Role(1L, "Admin", null, Hierarchy.ADMIN),
            new Role(2L, "User", null, Hierarchy.USER)
    );
}
