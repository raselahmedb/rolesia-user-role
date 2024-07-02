package com.raselahmedb.rolesia.role.mapper;

import com.raselahmedb.rolesia.role.dto.UserDto;
import com.raselahmedb.rolesia.role.model.User;

public interface UserMapper {

    UserDto toUserDto(User user);
}