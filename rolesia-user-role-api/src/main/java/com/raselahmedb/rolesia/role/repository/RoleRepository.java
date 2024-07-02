package com.raselahmedb.rolesia.role.repository;

import com.raselahmedb.rolesia.role.model.Hierarchy;
import com.raselahmedb.rolesia.role.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByHierarchy(Hierarchy hierarchy);
}
