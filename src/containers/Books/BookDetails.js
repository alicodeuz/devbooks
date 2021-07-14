import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from '../../utils/axios';

export default function BookDetails(props) {
  const params = useParams();
  console.log(params);
  const fetchBook = async () => {
    try {
      const { data } = await Axios.get(`/books/${params.id}`);
      console.log(data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div>
      <h2>BookDetails</h2>
    </div>
  )
}
