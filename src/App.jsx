import { useFormik } from "formik";
import * as Yup from "yup";

export default function App() {
  const SignupSchema = Yup.object().shape({
    fnameTH: Yup.string()
      .matches(/(?=.*[ก-ฮ])/, "กรุณากรอกชื่อ เป็นภาษาไทย")
      .max(100, "ความยาวของชื่อ ยาวเกินไป")
      .required("กรุณากรอกชื่อ"),
    lnameTH: Yup.string()
      .matches(/(?=.*[ก-ฮ])/, "กรุณากรอกนามสกุล เป็นภาษาไทย")
      .max(100, "ความยาวของนามสกุล ยาวเกินไป")
      .required("กรุณากรอกนามสกุล"),
    fnameEN: Yup.string()
      .matches(/(?=.*[a-zA-Z])/, "Please enter your name in English.")
      .max(100, "The length of name is too long.")
      .required("Please enter your name."),
    lnameEN: Yup.string()
      .matches(/(?=.*[a-zA-Z])/, "Please enter your lastname in English.")
      .max(100, "The length of lastname is too long.")
      .required("Please enter your lastname."),
    personID: Yup.string()
      .matches(/^\S*$/, "ไม่ต้องเว้นวรรค")
      .matches(/^[0-9]+$/, "กรุณากรอกหมายเลขบัตรประชาชนให้ถูกต้อง")
      .matches(/^[^-]*$/, "ไม่ต้องใส่อักขระขีด")
      .matches(/^[^.]*$/, "ต้องไม่มี .")
      .max(13, "กรุณากรอกหมายเลขบัตรประชาชนให้ถูกต้อง")
      .min(13, "กรุณากรอกหมายเลขบัตรประชาชนให้ถูกต้อง")
      .required("กรุณากรอกหมายเลขบัตรประชาชน"),
    passwd: Yup.string()
      .min(8, "กรุณาตั้งรหัสผ่านอย่างน้อย 8 ตัวอักษร")
      .matches(
        /(?=.*[a-z])/,
        "รหัสผ่านจะต้องมีตัวพิมพ์เล็กอย่างน้อย 1 ตัวอักษร"
      )
      .matches(
        /(?=.*[A-Z])/,
        "รหัสผ่านจะต้องมีตัวพิมพ์ใหญ่อย่างน้อย 1 ตัวอักษร"
      )
      .matches(/(?=.*[0-9])/, "รหัสผ่านจะต้องมีตัวเลข")
      .required("กรุณากรอกรหัสผ่าน"),
    phone: Yup.string()
      .matches(/^[^-]*$/, "ไม่ต้องใส่อักขระขีด")
      .matches(/^[^.]*$/, "ต้องไม่มี .")
      .matches(/^[0-9]+$/, "กรุณากรอกเฉพาะตัวเลข")
      .required("กรุณากรอกเบอร์มือถือ"),
    email: Yup.string()
      .email("กรุณากรอกอีเมลให้ถูกต้อง")
      .required("กรุณากรอกอีเมล"),
    accept: Yup.boolean().oneOf([true], "กรุณาคลิกยอมรับ"),
    // .required("กรุณาคลิกยอมรับ"),
  });

  const formik = useFormik({
    initialValues: {
      titleTH: "นาย",
      fnameTH: "",
      lnameTH: "",
      titleEN: "Mr.",
      fnameEN: "",
      lnameEN: "",
      date: "1",
      month: "มกราคม",
      year: "2552",
      personID: "",
      passwd: "",
      phone: "",
      email: "",
      accept: false,
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      if (!values.accept) {
        formik.setErrors({ accept: "กรุณาคลิกยอมรับ" });
      } else {
        formik.setErrors({ accept: "" });
        console.log("Form data", values);
        window.alert(
          `Form submit :\n\tชื่อ : ${values.titleTH} ${values.fnameTH}  ${values.lnameTH}\n\tname : ${values.titleEN} ${values.fnameEN}  ${values.lnameEN}\n\tDOB : ${values.date}/${values.month}/${values.year}\n\tPerson ID : ${values.personID}\n\tTel : ${values.phone}, Email : ${values.email}\n\tPassword : ${values.passwd}`
        );
        resetForm();
      }
    },
    handleChange: (e) => {
      const { id, value } = e.target;
      formik.setFieldValue(id, value);
    },
  });
  return (
    <div className="container-lg mx-auto my-4">
      <header className="text-center fs-2 fw-semibold mb-1">ลงทะเบียน</header>
      <form action="" onSubmit={formik.handleSubmit}>
        {" "}
        <h5 className="mb-4">ข้อมูลทั่วไป</h5>
        <div className="container mb-5 rounded border p-4">
          {" "}
          <div class="row my-3">
            <div class="col-2">
              <label htmlFor="titleTH" class="form-label">
                คำนำหน้า : <span>*</span>
              </label>
              <select
                class="form-select"
                id="titleTH"
                required
                value={formik.values.titleTH}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
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
              <input
                type="text"
                class="form-control"
                id="fnameTH"
                required
                {...formik.getFieldProps("fnameTH")}
              />
              {formik.touched.fnameTH && formik.errors.fnameTH ? (
                <div className="text-danger" id="errNameTH">
                  {formik.errors.fnameTH}
                </div>
              ) : null}
            </div>
            <div class="col">
              {" "}
              <label htmlFor="lnameTH" class="form-label">
                นามสกุล ภาษาไทย : <span>*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="lnameTH"
                required
                {...formik.getFieldProps("lnameTH")}
              />
              {formik.touched.lnameTH && formik.errors.lnameTH ? (
                <div className="text-danger" id="errLnameTH">
                  {formik.errors.lnameTH}
                </div>
              ) : null}
            </div>
          </div>
          <div class="row my-3">
            <div class="col-2">
              <label htmlFor="titleEN" class="form-label">
                คำนำหน้า : <span>*</span>
              </label>
              <select
                class="form-select"
                id="titleEN"
                required
                value={formik.values.titleEN}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
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
              <input
                type="text"
                class="form-control"
                id="fnameEN"
                required
                {...formik.getFieldProps("fnameEN")}
              />{" "}
              {formik.touched.fnameEN && formik.errors.fnameEN ? (
                <div className="text-danger" id="errNameEN">
                  {formik.errors.fnameEN}
                </div>
              ) : null}
            </div>
            <div class="col">
              {" "}
              <label htmlFor="lnameEN" class="form-label">
                นามสกุล ภาษาอังกฤษ : <span>*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="lnameEN"
                required
                {...formik.getFieldProps("lnameEN")}
              />{" "}
              {formik.touched.lnameEN && formik.errors.lnameEN ? (
                <div className="text-danger" id="errLnameEN">
                  {formik.errors.lnameEN}
                </div>
              ) : null}
            </div>
          </div>
          <div class="row my-3">
            <div class="col-3">
              <label htmlFor="date" class="form-label">
                วันเกิด : <span>*</span>
              </label>
              <select
                class="form-select"
                id="date"
                required
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
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
              <select
                class="form-select"
                id="month"
                required
                value={formik.values.month}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
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
              <select
                class="form-select"
                id="year"
                required
                value={formik.values.year}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option selected value="2552">
                  2552
                </option>
                <option value="2551">2551</option>
                <option value="2550">2550</option>
                <option value="2549">2549</option>
                <option value="2548">2548</option>
                <option value="2547">2547</option>
                <option value="2546">2546</option>
                <option value="2545">2545</option>
                <option value="2544">2544</option>
                <option value="2543">2543</option>
                <option value="2542">2542</option>
                <option value="2541">2541</option>
                <option value="2540">2540</option>
                <option value="2539">2539</option>
                <option value="2538">2538</option>
                <option value="2537">2537</option>
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
                {...formik.getFieldProps("personID")}
              />
              {formik.touched.personID && formik.errors.personID ? (
                <div className="text-danger" id="errPersonID">
                  {formik.errors.personID}
                </div>
              ) : null}
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
                {...formik.getFieldProps("passwd")}
              />
              {formik.touched.passwd && formik.errors.passwd ? (
                <div className="text-danger" id="errPasswd">
                  {formik.errors.passwd}
                </div>
              ) : null}
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
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-danger" id="errPhone">
                  {formik.errors.phone}
                </div>
              ) : null}
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
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger" id="errEmail">
                  {formik.errors.email}
                </div>
              ) : null}
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
              // required
              checked={formik.values.accept}
              onChange={formik.handleChange}
            />
            <label htmlFor="accept" className="form-check-label">
              ข้าพเจ้ายอมรับว่าข้อมูลข้างต้นเป็นข้อมูลจริงของข้าพเจ้า
            </label>
            {formik.touched.accept && formik.errors.accept ? (
              <div className="text-danger" id="errChecked">
                {formik.errors.accept}
              </div>
            ) : null}
          </div>
        </div>
        <div className="text-center mb-3">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            id="submit-btn"
          >
            ลงทะเบียน
          </button>
        </div>
      </form>
    </div>
  );
}
