		// Customer code validation
		function checkCustomer() {
			var format = /^(C|c)(U|u)(S|s)(T|t)$/;
			// var format = /^azoom$/;
			var checkCustomer = document.getElementById("CustomerName").value;
			if (format.test(checkCustomer) == false) {
				document.getElementById("CustomerError").innerHTML = "Username does not exist";
				return false;
			}
			else {
				document.getElementById("CustomerError").innerHTML = "";
			}
			return true;
		}

		function checkCustomerPassword() {
			var format = /^Customer$/;
			var checkCustomerPassword = document.getElementById("CustomerPassword").value;
			if (format.test(checkCustomerPassword) == false) {
				document.getElementById("CustomerError").innerHTML = "Wrong username or password";
				return false;
			}
			else {
				document.getElementById("CustomerError").innerHTML = "";
			}
			return true;
		}

		// Staff code validation
		function checkStaff() {
			var format = /^(A|a)(Z|z)(O|o)(O|o)(M|m)$/;
			// var format = /^azoom$/;
			var checkCard = document.getElementById("StaffName").value;
			if (format.test(checkCard) == false) {
				document.getElementById("StaffError").innerHTML = "Username does not exist";
				return false;
			}
			else {
				document.getElementById("StaffError").innerHTML = "";
			}
			return true;
		}

		function checkStaffPassword() {
			var format = /^AZoom$/;
			var checkStaffPassword = document.getElementById("StaffPassword").value;
			if (format.test(checkStaffPassword) == false) {
				document.getElementById("StaffError").innerHTML = "Wrong username or password";
				return false;
			}
			else {
				document.getElementById("StaffError").innerHTML = "";
			}
			return true;
		}

		// Sign Up code validation
		function validateNewAccount() {
			var newName = document.getElementById("newName").value;
			if (newName == null || newName == "") {
				document.getElementById("accountError").innerHTML =
					"Username must be filled out";
				return false;
			}
			else {
				document.getElementById("accountError").innerHTML = "";
			}

			var newPassword = document.getElementById("newPassword").value;
			if (newPassword == null || newPassword == "") {
				document.getElementById("accountError").innerHTML =
					"Password must be filled out";
				return false;
			}
			else {
				document.getElementById("accountError").innerHTML = "";
				document.getElementById("newPassword").value = newPassword.trim();
			}

			var newPassword2 = document.getElementById("newPassword2").value;
			if (newPassword2 == null || newPassword2 == "") {
				document.getElementById("accountError").innerHTML =
					"Password must be filled out";
				return false;
			}
			else {
				document.getElementById("accountError").innerHTML = "";
				document.getElementById("newPassword2").value = newPassword2.trim();
			}

			if (newPassword.trim() != newPassword2.trim()) {
				document.getElementById("accountError").innerHTML =
					"Password do not match";
				return false;
			}
			return true;
		}

		function openLoginForm() {
			openForm();
			closeSignUpForm();
		}

		function openSignUp() {
			openSignUpForm();
			closeForm();
		}

		// Check credit card detail
		function checkCard() {
			var format = /^[0-9]{16}$/;
			var checkCard = document.getElementById("card").value;
			if (format.test(checkCard) == false) {
				document.getElementById("cardError").innerHTML = "Enter 16 digits";
				return false;
			}
			else {
				document.getElementById("cardError").innerHTML = " ";
			}
		}

		function openForm() {
			document.getElementById("myForm").style.display = "block";
		}

		function closeForm() {
			document.getElementById("myForm").style.display = "none";
		}

		function openStaffForm() {
			document.getElementById("staffForm").style.display = "block";
		}

		function closeStaffForm() {
			document.getElementById("staffForm").style.display = "none";
		}

		function openSignUpForm() {
			document.getElementById("signUpForm").style.display = "block";
		}

		function closeSignUpForm() {
			document.getElementById("signUpForm").style.display = "none";
		}

		// Slideshow to display car
		function slideShow() {
			var imageSchedule = setInterval(changeImage, 2200);
		}

		function changeImage() {
			var imageList = ["image/electricCar.png", "image/electricCar1.png"];
			var index = Math.floor(Math.random() * imageList.length);
			var image = document.getElementById("photo");
			image.src = imageList[index];
		}		

		// Main functions for customer page
		function openPrivacyForm() {
			document.getElementById("privacyForm").style.display = "block";
		}

		function closePrivacyForm() {
			document.getElementById("privacyForm").style.display = "none";
		}

		// Get rent date
		function getRentDate() {
			document.getElementById("rent").innerHTML = rentDate.value;
		}

		// Get return date
		function getReturnDate() {
			document.getElementById("return").innerHTML = returnDate.value;
		}

		// Function to filter cars based on selected criteria
		function filterCars() {
			var selectedType = document.getElementById("vehicleType").value;
			var selectedPriceRange = document.getElementById("priceRange").value;
			var buttons = document.getElementsByTagName("button");

			for (var i = 0; i < buttons.length; i++) {
				var carType = buttons[i].getAttribute("data-car-type");
				var carPrice = parseFloat(buttons[i].getAttribute("data-car-price"));

				if ((selectedType === "all" || carType === selectedType) &&
					(selectedPriceRange === "all" || checkPriceRange(carPrice, selectedPriceRange))) {
					buttons[i].style.display = "inline-block";
				} else {
					buttons[i].style.display = "none";
				}
			}
		}

		function checkPriceRange(price, range) {
			var priceRanges = range.split("-");
			var minPrice = parseFloat(priceRanges[0]);
			var maxPrice = parseFloat(priceRanges[1]);

			return price >= minPrice && price <= maxPrice;
		}


		// Get car type
		function displayCarTypeValue() {
			var car = document.getElementsByName('carType');

			for (i = 0; i < car.length; i++) {
				if (car[i].checked)
					document.getElementById("carResult").innerHTML
						= car[i].value;
			}
		}

		function selectCar(carName) {
			// Reset background color for all car buttons
			var carButtons = document.querySelectorAll('.column button');
			carButtons.forEach(function (button) {
				button.style.backgroundColor = ''; // Reset to default
			});

			// Set background color for the clicked car button
			var selectedCarButton = document.querySelector('button[data-car="' + carName + '"]');
			selectedCarButton.style.backgroundColor = '#D4A55D';

			// Update the car result
			document.getElementById("carResult").innerHTML = carName;
		}

		// Get status
		function getStatus() {
			document.getElementById("status").innerHTML = "Reserved";
		}

		// Get price
		function getPrice() {
			document.getElementById("price").innerHTML = "Pending";
		}

		// Transaction table function
		function transactionFunction() {
			if (!validateForm()) {
				// Form is not valid, stop further processing
				alert("Please fill up all the required fields");
				return;
			}
			getRentDate()
			getReturnDate();
			displayCarTypeValue();
			getStatus();
			getPrice();
			successfulBooking()
		}

		function validateForm() {
			var firstName = document.getElementById("firstName").value;
			var lastName = document.getElementById("lastName").value;
			var phone = document.getElementById("phone").value;
			var email = document.getElementById("email").value;
			var card = document.getElementById("card").value;
			var expiryMonth = document.getElementById("expiryMonth").value;
			var expiryYear = document.getElementById("expiryYear").value;
			var CVC = document.getElementById("CVC").value;
			var rentDate = document.getElementById("rentDate").value;
			var rentTime = document.getElementById("rentTime").value;
			var returnDate = document.getElementById("returnDate").value;
			var vehicleType = document.getElementById("vehicleType").value;
			var visaChecked = document.getElementById("visaCheckbox").checked;
			var masterChecked = document.getElementById("masterCheckbox").checked;
			var privacyChecked = document.getElementById("privacy").checked;

			if (firstName == "" || lastName == "" || phone == "" || email == "" || card == "" || expiryMonth == "" || expiryYear == "" || CVC == "" || rentDate == "" || returnDate == "" || rentTime == "" || !vehicleType || (!visaChecked && !masterChecked) || (!privacyChecked)) {
				return false;
			}
			return true;
		}

		function successfulBooking() {
			alert("Thank You!\n" +
				"Booking is successful")
		}

		function openInvoice() {
			document.getElementById("invoiceForm").style.display = "block";
		}

		function closeInvoice() {
			document.getElementById("invoiceForm").style.display = "none";
		}

		function openPayment() {
			document.getElementById("paymentForm").style.display = "block";
		}

		function closePayment() {
			document.getElementById("paymentForm").style.display = "none";
			successful();
		}

		function transCompleted() {
			document.getElementById("completed").innerHTML = "Completed";
		}

		function successful() {
			alert("Thank You!\n" +
				"Payment is successful")
		}

		function closePayment() {
			successful();
			transCompleted();
			closeInvoice();
		}

		// Main functions for staff page
		function message() {
			document.getElementById("send").innerHTML = "SENT";
		}

		function openInvoice() {
			document.getElementById("invoiceForm").style.display = "block";
		}

		// Display date
		function currentDate() {
			var month = new Array();
			month[0] = "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "April";
			month[4] = "May";
			month[5] = "June";
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October";
			month[10] = "November";
			month[11] = "December";

			// Set current date
			var today = new Date();
			var date = today.getDate() + " " + (month[today.getMonth()]) + " "
				+ today.getFullYear() + " ";
			var dateTime = date + ' ';
			document.getElementById("dateToday").value = dateTime;
		}

		// Check damages
		function checkRoof() {
			var checkBox = document.getElementById("roof");
			var text = document.getElementById("roofText");
			if (checkBox.checked == true) {
				text.style.display = "block";
			} else {
				text.style.display = "none";
			}
		}

		function checkBumper() {
			var checkBox = document.getElementById("bumper");
			var text = document.getElementById("bumperText");
			if (checkBox.checked == true) {
				text.style.display = "block";
			} else {
				text.style.display = "none";
			}
		}

		function checkPanel() {
			var checkBox = document.getElementById("panel");
			var text = document.getElementById("panelText");
			if (checkBox.checked == true) {
				text.style.display = "block";
			} else {
				text.style.display = "none";
			}
		}

		function checkGlass() {
			var checkBox = document.getElementById("glass");
			var text = document.getElementById("glassText");
			if (checkBox.checked == true) {
				text.style.display = "block";
			} else {
				text.style.display = "none";
			}
		}

		function checkTires() {
			var checkBox = document.getElementById("tires");
			var text = document.getElementById("tiresText");
			if (checkBox.checked == true) {
				text.style.display = "block";
			} else {
				text.style.display = "none";
			}
		}

		// Get car type
		function displayCarTypeValue() {
			var car = document.getElementsByName('carType');

			for (i = 0; i < car.length; i++) {
				if (car[i].checked)
					document.getElementById("carResult").innerHTML
						= car[i].value;
			}
		}

		// Generate Invoice function
		function invoiceFunction() {
			openInvoice();
			displayCarTypeValue();
		}