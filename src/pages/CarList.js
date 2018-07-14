import React from 'react'
import audiImg from '../images/audi.png'
import bmwImg from '../images/BMW.png'

const CarList = ({ theList, setSortingMethod, sortingMethod, sortCars }) => {
	console.log('(*) sortingMethod =>', sortingMethod)
	const sortedCars = sortCars ? sortCars(theList) : theList

	return (
		<React.Fragment>
			{ theList && Array.isArray(theList) &&
				<table className='table-border-collapser'>
					<thead>
						<tr className='table-header'>
							<th>Brand</th>
							<th>Model</th>
							<th>Price &nbsp;
								{
									sortingMethod === 'sortByPriceDesc' &&
										<a href='#' onClick={() => setSortingMethod('sortByPriceAsc')}>⬇️</a>
								}
								{
									sortingMethod === 'sortByPriceAsc' &&
										<a href='#' onClick={() => setSortingMethod('sortByPriceDesc')}>⬆️</a>
								}
								{
									(sortingMethod !== 'sortByPriceDesc' && sortingMethod !== 'sortByPriceAsc') &&
										<a href='#' onClick={() => setSortingMethod('sortByPriceAsc')}>⏺</a>
								}
							</th>
							<th>Origin</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							theList.map((car) => {

								if (car.brand === 'Audi') car.img = (<img src={audiImg} />)
								if (car.brand === 'BMW') car.img = (<img src={bmwImg} />)
								// if (!car.img) car.img = (<img src={blankImg} />)
								return (
									<tr key={car.id}>
										<td style={{ paddingRight: 10 }}>
											<div>{car.img}</div>
										</td>
										<td>{car.model}</td>
										<td>{car.price}</td>
										<td>{car.origin}</td>
										<td><button type='button'>Buy Now</button></td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			}
		</React.Fragment>
	)
}

export default CarList


