export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Kullanıcı adı boş olamaz.";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Eposta boş olamaz.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Geçersiz Eposta formatı.";
  }
  if (!values.password) {
    errors.password = "Şifre boş olamaz.";
  } else if (values.password.length < 6) {
    errors.password = "Şifre 6 karakter veya daha fazla karaterden oluşmalıdır.";
  }

  if (!values.confPassword) {
    errors.confPassword = "Şifre boş olamaz.";
  } else if (values.confPassword !== values.password) {
    errors.confPassword = "Şifreler uyuşmuyor.";
  }

  if(!values.name) {
      errors.name = "Ad boş olamaz."
  }

  if(!values.surname) {
      errors.surname = "Soyad boş olamaz."
  }
  return errors;
}
