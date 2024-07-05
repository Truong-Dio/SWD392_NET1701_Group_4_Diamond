import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function InformationAboutDiamonds() {
  const [diamonds, setDiamonds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:44321/api/Diamond/Diamonds');
        setDiamonds(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message); // Lưu lại thông báo lỗi
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Đang tải...</div>;
  }

  if (error) {
    return <div className="text-center mt-5">Lỗi: {error}</div>; // Hiển thị thông báo lỗi
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Thông tin về các viên kim cương</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Hình ảnh</th>
              <th>Xuất xứ</th>
              <th>Mô tả</th>
              <th>Trọng lượng (Carat)</th>
              <th>Đánh giá màu sắc</th>
              <th>Đánh giá sáng sạch</th>
              <th>Đánh giá cắt</th>
              <th>Đánh bóng</th>
              <th>Đánh giá đối xứng</th>
              <th>Đánh giá tỏa sáng</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {diamonds.map(diamond => (
              <tr key={diamond.diamondID}>
                <td>{diamond.diamondID}</td>
                <td>
                  <img src={diamond.imageURL} alt={diamond.description} style={{width: '100px', height: '100px'}} />
                </td>
                <td>{diamond.origin}</td>
                <td>{diamond.description}</td>
                <td>{diamond.caratWeight}</td>
                <td>{diamond.colorGrade}</td>
                <td>{diamond.clarityGrade}</td>
                <td>{diamond.cutGrade}</td>
                <td>{diamond.polishGrade}</td>
                <td>{diamond.symmetryGrade}</td>
                <td>{diamond.fluoresceneGrade}</td>
                <td>${diamond.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InformationAboutDiamonds;
