      const validations = {
        fullname: {
          rule: (value) => value.trim().length >= 3,
          message: "نام کامل باید حداقل ۳ حرف باشد.",
        },
        username: {
          rule: (value) => value.trim().length >= 3,
          message: "نام کاربری باید حداقل ۳ حرف باشد.",
        },
        phone: {
          rule: (value) => /^09\d{9}$/.test(value),
          message: "شماره تلفن باید با 09 شروع شود و 11 رقم باشد.",
        },
        field: {
          rule: (value) => value.trim().length > 0,
          message: "رشته تحصیلی نمی‌تواند خالی باشد.",
        },
        birthdate: {
          rule: (value) => value.trim() !== "",
          message: "تاریخ تولد الزامی است.",
        },
        password: {
          rule: (value) => value.length >= 6,
          message: "رمز عبور باید حداقل ۶ کاراکتر باشد.",
        },
      };

      Object.keys(validations).forEach((id) => {
        const input = document.getElementById(id);
        const errorDiv = document.getElementById("error-" + id);
        const { rule, message } = validations[id];

        input.addEventListener("input", () => {
          if (!rule(input.value)) {
            input.classList.add("error-input");
            errorDiv.textContent = message;
          } else {
            input.classList.remove("error-input");
            errorDiv.textContent = "";
          }
        });
      });

      document
        .getElementById("liveForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          // اینجا می‌تونی فرم رو ارسال کنی اگر همه چیز درست بود
        });