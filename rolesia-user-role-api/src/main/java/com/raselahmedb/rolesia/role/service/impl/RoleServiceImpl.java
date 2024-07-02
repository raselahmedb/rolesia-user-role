package com.raselahmedb.rolesia.role.service.impl;

import com.raselahmedb.rolesia.role.model.Hierarchy;
import com.raselahmedb.rolesia.role.model.Role;
import com.raselahmedb.rolesia.role.repository.RoleRepository;
import com.raselahmedb.rolesia.role.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;
    @Override
    public List<Role> fetchAll() {
        return roleRepository.findAll();
    }

    @Override
    public Role save(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public Role fetchByHierarchy(Hierarchy hierarchy) {
        return roleRepository.findByHierarchy(hierarchy);
    }
}
