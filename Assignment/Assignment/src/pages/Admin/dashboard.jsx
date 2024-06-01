import React from 'react'

const DashboardPage = () => {
  return (
   <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Biểu Đồ</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button type="button" className="btn btn-sm btn-outline-secondary">Chia Sẻ</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Xuất Khẩu</button>
            </div>
            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
              <svg className="bi"><use xlinkHref="#calendar3" /></svg>
              Tuần Này
            </button>
          </div>
        </div>
        <canvas className="my-4 w-100" id="myChart" width={1900} height={0}/>
      <div className="chart-container">
  <div className="chart-bar" />
  <div className="chart-bar" />
  <div className="chart-bar" />
  <div className="chart-labels">
    <span> Tháng 1</span>
    <span>Tháng 2</span>
    <span>Tháng 3</span>
  </div>
</div>

   </>
  )
}

export default DashboardPage