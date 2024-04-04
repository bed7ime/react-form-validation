export default function App() {
  return (
    <div className="container-lg mx-auto my-4">
      <header className="text-center fs-2 fw-semibold mb-1">ลงทะเบียน</header>
      <form action="">
        {" "}
        <h5 className="mb-4">ข้อมูลทั่วไป</h5>
        <div className="container mb-5 rounded border p-4">
          {" "}
          <div class="row my-3">
            <div class="col-2">
              <label htmlFor="titleTH" class="form-label">
                คำนำหน้า : <span>*</span>
              </label>
              <select class="form-select" id="titleTH" required>
                <option selected value="นาย">
                  นาย
                </option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </select>
            </div>
            <div class="col">
              <label htmlFor="fnameTH" class="form-label">
                ชื่อ ภาษาไทย : <span>*</span>
              </label>
              <input type="text" class="form-control" id="fnameTH" required />
            </div>
            <div class="col">
              {" "}
              <label htmlFor="lnameTH" class="form-label">
                นามสกุล ภาษาไทย : <span>*</span>
              </label>
              <input type="text" class="form-control" id="lnameTH" required />
            </div>
          </div>
          <div class="row my-3">
            <div class="col-2">
              <label htmlFor="titleEN" class="form-label">
                คำนำหน้า : <span>*</span>
              </label>
              <select class="form-select" id="titleEN" required>
                <option selected value="Mr.">
                  Mr.
                </option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
              </select>
            </div>
            <div class="col">
              <label htmlFor="fnameEN" class="form-label">
                ชื่อ ภาษาอังกฤษ : <span>*</span>
              </label>
              <input type="text" class="form-control" id="fnameEN" required />
            </div>
            <div class="col">
              {" "}
              <label htmlFor="lnameEN" class="form-label">
                นามสกุล ภาษาอังกฤษ : <span>*</span>
              </label>
              <input type="text" class="form-control" id="lnameEN" required />
            </div>
          </div>
          <div class="row my-3">
            <div class="col-3">
              <label htmlFor="date" class="form-label">
                วันเกิด : <span>*</span>
              </label>
              <select class="form-select" id="date" required>
                <option selected value="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
            <div class="col">
              <label htmlFor="month" class="form-label">
                เดือน : <span>*</span>
              </label>
              <select class="form-select" id="month" required>
                <option selected value="มกราคม">
                  มกราคม
                </option>
                <option value="กุมภาพันธ์">กุมภาพันธ์</option>
                <option value="มีนาคม">มีนาคม</option>
                <option value="เมษายน">เมษายน</option>
                <option value="พฤษภาคม">พฤษภาคม</option>
                <option value="มิถุนายน">มิถุนายน</option>
                <option value="กรกฎาคม">กรกฎาคม</option>
                <option value="สิงหาคม">สิงหาคม</option>
                <option value="กันยายน">กันยายน</option>
                <option value="ตุลาคม">ตุลาคม</option>
                <option value="พฤศจิกายน">พฤศจิกายน</option>
                <option value="ธันวาคม">ธันวาคม</option>
              </select>
            </div>
            <div class="col-3">
              <label htmlFor="year" class="form-label">
                ปี (พ.ศ.) : <span>*</span>
              </label>
              <select class="form-select" id="year" required>
                <option selected value="2552">
                  2552
                </option>
                <option value="2553">2553</option>
                <option value="2554">2554</option>
                <option value="2555">2555</option>
                <option value="2556">2556</option>
                <option value="2557">2557</option>
                <option value="2558">2558</option>
                <option value="2559">2559</option>
                <option value="2560">2560</option>
                <option value="2561">2561</option>
                <option value="2562">2562</option>
                <option value="2563">2563</option>
                <option value="2564">2564</option>
                <option value="2565">2565</option>
                <option value="2566">2566</option>
                <option value="2567">2567</option>
              </select>
            </div>
          </div>{" "}
          <div className="row my-3">
            <div className="col">
              {" "}
              <label htmlFor="personID" class="form-label">
                หมายเลขบัตรประชาชน : <span>*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="personID"
                placeholder="ไม่ต้องใส่อักขระขีดและเว้นวรรค"
                required
              />
            </div>
          </div>
        </div>
        <h5 className="mb-4">สร้างรหัสผ่าน</h5>
        <div className="container mb-5 rounded border p-4">
          <div className="row my-3">
            <div className="col">
              {" "}
              <label htmlFor="passwd" class="form-label">
                รหัสผ่าน สำหรับเข้าใช้งาน : <span>*</span>
              </label>
              <input
                type="password"
                class="form-control"
                id="passwd"
                placeholder="a-z, A-Z, 0-9, 8 อักขระขึ้นไป"
                required
              />
            </div>
          </div>
        </div>
        <h5 className="mb-4">ข้อมูลติดต่อ</h5>
        <div className="container mb-5 rounded border p-4">
          <div className="row my-3">
            <div className="col">
              {" "}
              <label htmlFor="phone" class="form-label">
                เบอร์มือถือ : <span>*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="phone"
                placeholder="ไม่ต้องใส่อักขระขีด"
                required
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              {" "}
              <label htmlFor="email" class="form-label">
                อีเมล : <span>*</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="example@email.com"
                required
              />
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              value
              id="accept"
              required
            />
            <label htmlFor="accept" className="form-check-label">
              ข้าพเจ้ายอมรับว่าข้อมูลข้างต้นเป็นข้อมูลจริงของข้าพเจ้า
            </label>
          </div>
        </div>
        <div className="text-center mb-3">
          <button type="submit" className="btn btn-primary btn-lg">
            ลงทะเบียน
          </button>
        </div>
      </form>
    </div>
  );
}
