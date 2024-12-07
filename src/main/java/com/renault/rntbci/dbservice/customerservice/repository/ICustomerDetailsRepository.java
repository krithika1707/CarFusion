package com.renault.rntbci.dbservice.customerservice.repository;

import com.renault.rntbci.dbservice.customerservice.entity.CustomerDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerDetailsRepository extends JpaRepository<CustomerDetails,Long> {

    @Query("select c from CustomerDetails c where c.customer_mail_id =:customerMailId")
    CustomerDetails findByCustomer_mail_id(String customerMailId);
}
