var displayCurrentDate = moment().format("dddd, MMMM Do YYYY");
        console.log(displayCurrentDate);
        
        $("#currentDay").append(displayCurrentDate);

        $(document).ready(function() {
            $(".saveBtn").on("click", function() {
                var value = $(this).siblings(".description").val();
                var time = $(this).parent().attr("id");

                localStorage.setItem(time,value);
            });

            function hourUpdater() {
                // current number of hours
                var currentHour = moment().hours();

                // loop over time blocks
                $(".time-block").each(function() {
                    var blockHour = parseInt($(this).attr("id").split("-")[1]);

                    if (blockHour < currentHour) {
                        $(this).addClass("past");

                    }
                    else if (blockHour === currentHour) {
                        $(this).removeClass("past");
                        $(this).addClass("present");
                    }
                    else {
                        $(this).removeClass("past")
                        $(this).removeClass("present");
                        $(this).addClass("future");
                    }

                });
            }
            hourUpdater();
        })

        // load any saved data from local storage
        $("#hour-9 .description").val(localStorage.getItem("hour-9"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));

