function text_short() {
  const popup = document.getElementById("popuptext")

  $("#popuptext").fadeIn("slow");

  $.ajax({
      type: 'POST',
      url: '/shorten',
      data: JSON.stringify({ url: $("#url").value }),
      contentType: "application/json",
      dataType: 'json',
      success: function(data) {
        console.log(data);
        popup.innerHTML = `<a href=${data.url}>${data.url}</a>`
      },
      error: function(e) {

        console.log("ERROR : ", e);
        popup.innerHTML = `<p>Error: ${e.responseText}, don't try again.</p>`
      }
  })

  // fetch("/shorten", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: link
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     const url = data.url
  //     popup.innerHTML = `<a href=${url}>${url}</a>`
  //   })
  //   .catch(error => {
  //     popup.innerHTML = `<p>Error: ${error}, don't try again.</p>`
  //   })
}

function text_share() {
  const popup = document.getElementById("popuptext")
  $("#popuptext").fadeIn("slow");

  $.ajax({
      type: 'POST',
      url: '/share',
      data: JSON.stringify({ message: $("#messageText").value, short: $("#messageShorten").value }),
      success: function(data) { alert('data: ' + data); },
      contentType: "application/json",
      dataType: 'json',
      success: function(data) {
        console.log(data);
        popup.innerHTML = `<a href=${data.url}>${data.url}</a>`
      },
      error: function(e) {

        console.log("ERROR : ", e);
        popup.innerHTML = `<p>Error: ${e.responseText}, don't try again.</p>`
      }
  })
    // .then(response => response.json())
    // .then(data => {
    //   const url = data.url
    //   popup.innerHTML = `<a href=${url}>${url}</a>`
    // })
}

function copyToClipboard(element) {
  const popup = document.getElementById("copyPopup");
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();

  $("#copyPopup").fadeIn("slow");
  setTimeout(function() {
    $("#copyPopup").fadeOut("slow");
  }, 1500);
}
