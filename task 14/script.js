// Function to multiply three numbers
function multiplyThreeNumbers(a, b, c) {
    return a * b * c;
  }
  
  // Function to divide two numbers
  function divideTwoNumbers(a, b) {
    if (b === 0) {
      return 'Cannot divide by zero';
    }
    return a / b;
  }
  
  // Function to add background color to a div element
  function addBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  
  // Function to generate a random background color for the body
  function generateRandomBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  }
  
  // Function to show the modal on page load
  function showModal() {
    $('#myModal').modal('show');
  }
  
  // Event listener for page load
  window.onload = function() {
    showModal();
    generateRandomBackgroundColor();
  };
  
  // Example usage
  const resultMultiply = multiplyThreeNumbers(2, 3, 4); // 24
  const resultDivide = divideTwoNumbers(10, 2); // 5
  console.log('Multiply Result:', resultMultiply);
  console.log('Divide Result:', resultDivide);
  
  const colorDiv = document.getElementById('colorDiv');
  addBackgroundColor(colorDiv, 'lightblue');
  