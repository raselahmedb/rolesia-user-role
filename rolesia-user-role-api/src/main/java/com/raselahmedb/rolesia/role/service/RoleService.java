package com.raselahmedb.rolesia.role.service;

import com.raselahmedb.rolesia.role.model.Hierarchy;
import com.raselahmedb.rolesia.role.model.Role;

import java.util.List;

public interface RoleService {
    List<Role> fetchAll();
    Role save(Role role);
    Role fetchByHierarchy(Hierarchy hierarchy);
}
