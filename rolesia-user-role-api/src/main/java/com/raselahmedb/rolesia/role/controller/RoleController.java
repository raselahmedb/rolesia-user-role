package com.raselahmedb.rolesia.role.controller;

import com.raselahmedb.rolesia.role.model.Role;
import com.raselahmedb.rolesia.role.service.RoleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
@RequiredArgsConstructor
public class RoleController {

    private final RoleService roleService;

    @GetMapping
    public List<Role> getAllRoles() {
        return roleService.fetchAll();
    }

    @PostMapping
    public Role createRole(@Valid @RequestBody Role role) {
        return roleService.save(role);
    }
}
