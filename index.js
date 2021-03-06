const $ = document.querySelector.bind(document);

let Value1 = 0;
let Value2 = 0;
let Value3 = 0;
let Value4 = 0;
let result = 0;
let quantity1 = 1;
let quantity2 = 1;
let quantity3 = 1;
let quantity4 = 1;
let price1 = () => {
  try {
    let result1 = parseInt($(".value1").dataset.value);
    Value1 += result1;
    console.log(result1, Value1);
    let GetValue = $(".one");
    GetValue.placeholder = `${Value1} x ${quantity1}`;
    quantity1++;
  } catch (error) {
    console.log(error.message);
  }
};
let price2 = () => {
  try {
    let result2 = parseInt($(".value2").dataset.value);
    Value2 += result2;
    console.log(result2, Value2);
    let GetValue2 = $(".two");
    GetValue2.placeholder = `${Value2} x ${quantity2}`;
    quantity2++;
  } catch (error) {
    console.log(error.message);
  }
};
let price3 = () => {
  try {
    let result3 = parseInt(document.querySelector(".value3").innerHTML);
    Value3 += result3;
    console.log(result3, Value3);
    let GetValue3 = $(".three");
    GetValue3.placeholder = `${Value3} x ${quantity3}`;
    quantity3++;
  } catch (error) {
    console.log(error.message);
  }
};
let price4 = () => {
  try {
    let result4 = parseInt(document.querySelector(".value4").innerHTML);
    Value4 += result4;
    let GetValue4 = $(".four");
    GetValue4.placeholder = `${Value4} x ${quantity4}`;
    quantity4++;
  } catch (error) {
    console.log(error.message);
  }
};
let CalculateThePrice = () => {
  try {
    if (Value1 !== 0) {
      result += Value1;
    }
    if (Value2 !== 0) {
      result += Value2;
    }
    if (Value3 !== 0) {
      result += Value3;
    }
    if (Value4 !== 0) {
      result += Value4;
    }
    let Coode = $(".result");
    Coode.innerHTML = `
        <style>
       
        .invoice-container {
            padding: 1rem;
        }
        .invoice-container .invoice-header .invoice-logo {
            margin: 0.8rem 0 0 0;
            display: inline-block;
            font-size: 1.6rem;
            font-weight: 700;
            color: #bcd0f7;
        }
        .invoice-container .invoice-header .invoice-logo img {
            max-width: 130px;
        }
        .invoice-container .invoice-header address {
            font-size: 0.8rem;
            color: #8a99b5;
            margin: 0;
        }
        .invoice-container .invoice-details {
            margin: 1rem 0 0 0;
            padding: 1rem;
            line-height: 180%;
            background: #1a233a;
        }
        .invoice-container .invoice-details .invoice-num {
            text-align: right;
            font-size: 0.8rem;
        }
        .invoice-container .invoice-body {
            padding: 1rem 0 0 0;
        }
        .invoice-container .invoice-footer {
            text-align: center;
            font-size: 0.7rem;
            margin: 5px 0 0 0;
        }
        
        .invoice-status {
            text-align: center;
            padding: 1rem;
            background: #272e48;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            margin-bottom: 1rem;
        }
        .invoice-status h2.status {
            margin: 0 0 0.8rem 0;
        }
        .invoice-status h5.status-title {
            margin: 0 0 0.8rem 0;
            color: #8a99b5;
        }
        .invoice-status p.status-type {
            margin: 0.5rem 0 0 0;
            padding: 0;
            line-height: 150%;
        }
        .invoice-status i {
            font-size: 1.5rem;
            margin: 0 0 1rem 0;
            display: inline-block;
            padding: 1rem;
            background: #1a233a;
            -webkit-border-radius: 50px;
            -moz-border-radius: 50px;
            border-radius: 50px;
        }
        .invoice-status .badge {
            text-transform: uppercase;
        }
        
        @media (max-width: 767px) {
            .invoice-container {
                padding: 1rem;
            }
        }
        
        .card {
            background: #272E48;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            border: 0;
            margin-bottom: 1rem;
        }
        
        .custom-table {
            border: 1px solid #2b3958;
        }
        .custom-table thead {
            background: #2f71c1;
        }
        
        .custom-table > tbody tr:hover {
            background: #172033;
        }
        .custom-table > tbody tr:nth-of-type(even) {
            background-color: #1a243a;
        }
        .custom-table > tbody td {
            border: 1px solid #2e3d5f;
        }
        
        .table {
            background: #1a243a;
            color: #bcd0f7;
            font-size: .75rem;
        }
        .text-success {
            color: #c0d64a !important;
        }
        .custom-actions-btns {
            margin: auto;
            display: flex;
            justify-content: flex-end;
        }
        .custom-actions-btns .btn {
            margin: .3rem 0 .3rem .3rem;
        }
        
        </style>
        <div class="container">
    <div class="row gutters">
    	<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    		<div class="card">
    			<div class="card-body p-0">
    				<div class="invoice-container">
    					<div class="invoice-header">
    
    						<!-- Row start -->
    						<div class="row gutters">
    							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
    								<div class="custom-actions-btns mb-5">
    									<a href="#" class="btn btn-primary">
    										<i class="icon-download"></i> Download
    									</a>
    									<a href="#" class="btn btn-secondary">
    										<i class="icon-printer"></i> Print
    									</a>
    								</div>
    							</div>
    						</div>
    						<!-- Row end -->
    
    						<!-- Row start -->
    						<div class="row gutters">
    							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
    								<a href="index.html" class="invoice-logo">
    									Bootdey.com
    								</a>
    							</div>
    							<div class="col-lg-6 col-md-6 col-sm-6">
    								<address class="text-right">
    									Maxwell admin Inc, 45 NorthWest Street.<br>
    									Sunrise Blvd, San Francisco.<br>
    									00000 00000
    								</address>
    							</div>
    						</div>
    						<!-- Row end -->
    
    						<!-- Row start -->
    						<div class="row gutters">
    							<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
    								<div class="invoice-details">
    									<address>
    										Alex Maxwell<br>
    										150-600 Church Street, Florida, USA
    									</address>
    								</div>
    							</div>
    							<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
    								<div class="invoice-details">
    									<div class="invoice-num">
    										<div>Invoice - #009</div>
    										<div>January 10th 2020</div>
    									</div>
    								</div>													
    							</div>
    						</div>
    						<!-- Row end -->
    
    					</div>
    
    					<div class="invoice-body">
    
    						<!-- Row start -->
    						<div class="row gutters">
    							<div class="col-lg-12 col-md-12 col-sm-12">
    								<div class="table-responsive">
    									<table class="table custom-table m-0">
    										<thead>
    											<tr>
    												<th>Items</th>
    												<th>Product ID</th>
    												<th>Quantity</th>
    												<th>Sub Total</th>
    											</tr>
    										</thead>
    										<tbody>
    											<tr>
    												<td>
    													Wordpress Template
    													<p class="m-0 text-muted">
    														Reference site about Lorem Ipsum, giving information on its origins.
    													</p>
    												</td>
    												<td>#50000981</td>
    												<td>9</td>
    												<td>$5000.00</td>
    											</tr>
    											<tr>
    												<td>
    													Maxwell Admin Template
    													<p class="m-0 text-muted">
    														As well as a random Lipsum generator.
    													</p>
    												</td>
    												<td>#50000126</td>
    												<td>5</td>
    												<td>$100.00</td>
    											</tr>
    											<tr>
    												<td>
    													Unify Admin Template
    													<p class="m-0 text-muted">
    														Lorem ipsum has become the industry standard.
    													</p>
    												</td>
    												<td>#50000821</td>
    												<td>6</td>
    												<td>$49.99</td>
    											</tr>
    											<tr>
    												<td>&nbsp;</td>
    												<td colspan="2">
    													<p>
    														Subtotal<br>
    														Shipping &amp; Handling<br>
    														Tax<br>
    													</p>
    													<h5 class="text-success"><strong>Grand Total</strong></h5>
    												</td>			
    												<td>
    													<p>
    														$5000.00<br>
    														$100.00<br>
    														$49.00<br>
    													</p>
    													<h5 class="text-success"><strong>${result}</strong></h5>
    												</td>
    											</tr>
    										</tbody>
    									</table>
    								</div>
    							</div>
    						</div>
    						<!-- Row end -->
    
    					</div>
    
    					<div class="invoice-footer">
    						Thank you for your Business.
    					</div>
    
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</div>
        `;

  } catch (error) {
    console.log(error.message);
  }
};
let NewPage = () =>{
  window.open('sign-up.html')
}

