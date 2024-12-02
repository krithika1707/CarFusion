package com.example.car_fusion.Repository;

import com.example.car_fusion.Entity.Customer_Details;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface ICustomer_Details_Repository extends JpaRepository<Customer_Details,Long> {

    @Query("select c from Customer_Details c where c.customer_mail_id =:customerMailId")
    Customer_Details findByCustomer_mail_id(String customerMailId);
}
