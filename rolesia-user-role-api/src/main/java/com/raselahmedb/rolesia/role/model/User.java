package com.raselahmedb.rolesia.role.model;

import com.raselahmedb.rolesia.role.security.oauth2.OAuth2Provider;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "email")
})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String name;
    private String email;
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;
    private String imageUrl;

    @Enumerated(EnumType.STRING)
    private OAuth2Provider provider;

    private String providerId;

    public User(String username, String password, String name, String email, Role role, String imageUrl, OAuth2Provider provider, String providerId) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.role = role;
        this.imageUrl = imageUrl;
        this.provider = provider;
        this.providerId = providerId;
    }
}
