import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/shared/SectionTitle";

const AllPayments = () => {
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle title={"All Payments"} subtitle={"Admin"}></SectionTitle>

      <div>
        <div className="overflow-x-auto max-w-screen-xl mx-auto">
          <table className="table ">
            <thead className="bg-main">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Payment</th>
                <th>Date of Pay</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment, i) => {
                return (
                  <tr key={payment._id}>
                    <th>{i + 1}</th>
                    <td>{payment.email}</td>
                    <td>{payment.payment}</td>
                    <td>{payment.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPayments;
