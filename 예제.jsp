<div class="middle3">
	<form id="reservation_select" action="reservation_select">
		 <table border="1" width=50% height=50% align=center id="example-table-3" class="table table-bordered table-hover text-center">
			 <th>선택</th>
			 <th>날짜</th>
			 <th>출발지</th>
			 <th>도착지</th>
			 <th>이름</th>
			 <th>좌석</th>
			 <c:forEach var="list"  items="${list}">
					<tr><!-- 첫번째 줄 시작 -->                     
						 <td> <input type="checkbox" id="rev_list_select" name="user_CheckBox" value=""> </td>
							<td> ${list.reservation_date} </td>
							<td> ${list.customer_no}</td>
							<td>  </td>
							<td> ${list.name} </td>
							<td class="seat"> ${list.seat_no} </td>            
					</tr><!-- 첫번째 줄 끝 -->   
			 </c:forEach>                  
			 <tr></tr>
		</table>
 </form>
	
	<div>
		<button type="submit" class="btn btn-lg btn-primary">예약취소</button>
		<button type="submit" class="btn btn-lg btn-primary">확인</button>
		<button type="button" class="btn btn-lg btn-primary btn-test">테스트</button>
 </div>
<script>
const form = document.getElementById('reservation_select');
const table = form.querySelector('table');
const selectBoxes = table.querySelectorAll('input[type=checkbox]');
const testBtn = document.querySelector('btn-test');
const deletedSeats = [];

function selectChecked(e) {
	selectBoxes.forEach(function(target) {
		if (target.checked) deletedSeats.push(target.parentElement.querySelector('seat').value);
	});
	alert(deletedSeats);
}
testBtn.addEventListener('click', selectChecked);

</script>d