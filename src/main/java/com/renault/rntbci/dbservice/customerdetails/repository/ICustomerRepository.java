package com.renault.rntbci.dbservice.customerdetails.repository;

import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<CustomerDetails,Long> {
@Query("SELECT c FROM CustomerDetails c WHERE c.customer_mail_id = :mail and c.password=:password")
CustomerDetails findByCustomerMailId(String mail, String password);
}
