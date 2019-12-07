import React, { PureComponent } from 'react';
import ReactToPrint from 'react-to-print';
import * as style from './PrintComponent.module.css';
 
class ComponentToPrint extends React.Component {
  render() {
    return (
        <div class={style.printDivParentCom}>
        <div class={style.printDivCom}>
            <header class={style.headerCom}>
                <h1 class={style.h1Com}>Invoice</h1>
                <address class={style.addressCom}>
                    <p class={style.pCom}>John Abaram</p>
                    <p class={style.pCom}>101 Charles Ave</p>
                    <p class={style.pCom}>(800) 252-55256</p>
			    </address>
            </header>
            <article class={style.articleCom}>
			<h1 class={style.articleHeaderCom}>Recipient</h1>
			<address class={style.articleAddressCom}>
				<p>Lockania Enterprise<br/>c/o Rajesh Sanmon</p>
			</address>
			<table class={style.tableMetaCom}>
				<tr class={style.tableTrCom}>
					<th class={style.tableThCom} ><span contenteditable>Invoice #</span></th>
					<td class={style.tableTdCom} ><span contenteditable>3433233</span></td>
				</tr>
				<tr class={style.tableTrCom}>
					<th class={style.tableThCom} ><span contenteditable>Date</span></th>
					<td class={style.tableTdCom} ><span contenteditable>December 7, 2019</span></td>
				</tr>
				<tr class={style.tableTrCom}>
					<th class={style.tableThCom} ><span contenteditable>Amount Due</span></th>
					<td class={style.tableTdCom} ><span id="prefix" contenteditable>$</span><span>600.00</span></td>
				</tr>
			</table>
			<table class={style.tableInventoryCom}>
				<thead>
					<tr class={style.tableTrCom}>
						<th class={style.tableThCom} ><span contenteditable>Item</span></th>
						<th class={style.tableThCom} ><span contenteditable>Description</span></th>
						<th class={style.tableThCom} ><span contenteditable>Rate</span></th>
						<th class={style.tableThCom} ><span contenteditable>Quantity</span></th>
						<th class={style.tableThCom} ><span contenteditable>Price</span></th>
					</tr>
				</thead>
				<tbody>
					<tr class={style.tableTrCom}>
						<td class={style.tableTdCom} ><span contenteditable>Microoven</span></td>
						<td class={style.tableTdCom} ><span contenteditable>Samsung 21 L     Microwave Oven</span></td>
						<td class={style.tableTdCom} ><span data-prefix>$</span><span contenteditable>300.00</span></td>
						<td class={style.tableTdCom} ><span contenteditable>2</span></td>
						<td class={style.tableTdCom} ><span data-prefix>$</span><span>600.00</span></td>
					</tr>
                    <tr class={style.tableTrCom}>
						<td class={style.tableTdCom} ><span contenteditable>Fridge</span></td>
						<td class={style.tableTdCom} ><span contenteditable>Whirlpool 215 L 3 Star Direct-Cool</span></td>
						<td class={style.tableTdCom} ><span data-prefix>$</span><span contenteditable>1000.00</span></td>
						<td class={style.tableTdCom} ><span contenteditable>1</span></td>
						<td class={style.tableTdCom} ><span data-prefix>$</span><span>1000.00</span></td>
					</tr>
				</tbody>
			</table>
			<table class={style.tableBalanceCom}>
				<tr class={style.tableTrCom}>
					<th class={style.tableThCom} ><span contenteditable>Total</span></th>
					<td class={style.tableTdCom} ><span data-prefix>$</span><span>1600.00</span></td>
				</tr>
				<tr class={style.tableTrCom}>
					<th class={style.tableThCom} ><span contenteditable>Amount Paid</span></th>
					<td class={style.tableTdCom} ><span data-prefix>$</span><span contenteditable>0.00</span></td>
				</tr>
				<tr class={style.tableTrCom}>
					<th class={style.tableThCom} ><span contenteditable>Balance Due</span></th>
					<td class={style.tableTdCom} ><span data-prefix>$</span><span>1600.00</span></td>
				</tr>
			</table>
		</article>
        </div>
        </div>
    );
  }
}

export default class PrintComponent extends PureComponent {
    render() {
        return (
          <div class={style.parentCom}>
            <ComponentToPrint ref={el => (this.componentRef = el)} />
            <ReactToPrint
              trigger={() => <a href="#">Print</a>}
              content={() => this.componentRef}
            />
          </div>
        );
    }
}