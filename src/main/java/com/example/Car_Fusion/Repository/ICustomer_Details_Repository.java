package com.example.Car_Fusion.Repository;

import com.example.Car_Fusion.Entity.Customer_Details;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomer_Details_Repository extends JpaRepository<Customer_Details,Long> {
@Query("SELECT c FROM Customer_Details c WHERE c.customer_mail_id = :mail and c.password=:password")
Customer_Details findByCustomerMailId(String mail,String password);
}
