package com.example.back.repositories;

import org.springframework.stereotype.Repository;

@Repository



public interface MemberDAO extends JpaRepository<Member, long>{
}
