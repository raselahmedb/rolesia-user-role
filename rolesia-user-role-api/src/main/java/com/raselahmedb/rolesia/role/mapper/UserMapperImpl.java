package com.raselahmedb.rolesia.role.mapper;

import com.raselahmedb.rolesia.role.dto.UserDto;
import com.raselahmedb.rolesia.role.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDto toUserDto(User user) {
        if (user == null) {
            return null;
        }
        return new UserDto(user.getId(), user.getUsername(), user.getName(), user.getEmail(), user.getRole().getName());
    }
}
