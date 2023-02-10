  $(document).ready(function() {
      $(".loader").fadeOut(1500, function() {
          $(".spiner").fadeOut(500)
          $("body").css("overflow", "auto")
      });

  })



  let keys = document.querySelectorAll('.key');
  let display_input = document.querySelector('.display .input');
  let display_output = document.querySelector('.display .output');
  let input = "";
  display_input.innerHTML = "0";
  display_output.innerHTML = "0";

  for (let key of keys) {
      const value = key.dataset.key;
      key.addEventListener('click', () => {

          if (value == "clear") {
              input = "";
              display_input.innerHTML = "0";
              display_output.innerHTML = "0";
          } else if (value == "delete") {
              input = input.slice(0, -1);
              display_output.innerHTML = "0";
              display_input.innerHTML = CleanInput(input);
          } else if (value == "=") {
              let result = eval(input);

              display_output.innerHTML = result;
          } else if (value == "brackets") {
              if (
                  input.indexOf("(") == -1 ||
                  input.indexOf("(") != -1 &&
                  input.indexOf(")") != -1 &&
                  input.lastIndexOf("(") < input.lastIndexOf(")")
              ) {
                  input += "(";
              } else if (
                  input.indexOf("(") != -1 &&
                  input.indexOf(")") == -1 ||
                  input.indexOf("(") != -1 &&
                  input.indexOf(")") != -1 &&
                  input.lastIndexOf("(") > input.lastIndexOf(")")
              ) {
                  input += ")";
              }

              display_input.innerHTML = CleanInput(input);
          } else {

              input += value;
              display_input.innerHTML = CleanInput(input);

          }


          let result = eval(input);
          if (result == input) {
              display_output.innerHTML = '0';
          } else {
              if (result != null) {
                  display_output.innerHTML = result;

              }
          }
      })
  }

  function CleanInput(input) {
      let input_array = input.split("");

      for (let i = 0; i < input_array.length; i++) {
          if (input_array[i] == "*") {
              input_array[i] = ` <span class="operator">x</span> `;
          } else if (input_array[i] == "/") {
              input_array[i] = ` <span class="operator">÷</span> `;
          } else if (input_array[i] == "+") {
              input_array[i] = ` <span class="operator">+</span> `;
          } else if (input_array[i] == "-") {
              input_array[i] = ` <span class="operator">-</span> `;
          } else if (input_array[i] == "(") {
              input_array[i] = `<span class="brackets">(</span>`;
          } else if (input_array[i] == ")") {
              input_array[i] = `<span class="brackets">)</span>`;
          } else if (input_array[i] == "%") {
              input_array[i] = `<span class="percent">%</span>`;
          }
      }

      return input_array.join("");
  }