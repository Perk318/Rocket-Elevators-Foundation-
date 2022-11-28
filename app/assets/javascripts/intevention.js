document.addEventListener('DOMContentLoaded', function (e) {
    const customer = document.getElementById('customer')
    const building = document.getElementById('building')
    const battery = document.getElementById('battery')
    const column = document.getElementById('column')
    const elevator = document.getElementById('elevator')
    
   
    //  COUSTOMER TO BUILDING/
    // add the 'Book' option tag back in the HTML w/ dynamic values of ID and whats visible
    const defaultBuilding = (id, html) => {
       let opt = document.createElement('option')
       opt.value = id
       opt.innerHTML = html
       building.appendChild(opt)
    }
 
    // removing all the option tags for book
    const removeBuildingOptions = () => {
       while (building.options.length != 0) {
          building.remove(0)
       }
    }
 
    // when first loaded, all books will be displayed in the book dropdown
    // this will remove everything
    if (building.value === '') {
       removeBuildingOptions()
       defaultBuilding(0, 'Building')
    }
 
    // change event on the author dropdown
    customer.addEventListener('change', (e) => {
       let id_value_string = e.target.value
       // a reset, if user selects default then we will remove everything and default back
       if (
          id_value_string === '' ||
          id_value_string === null ||
          id_value_string === 0
       ) {
          removeBuildingOptions()
          defaultBuilding(0, 'Building')
       } else {
          // fetch will call the controller which holds our data
          fetch(`/get_building_by_customer/${e.target.value}`)
             .then((response) => response.json())
             .then((data) => {
                removeBuildingOptions()
                defaultBuilding(0, 'Building')
                // loop through all our data and display only books we need
                data.forEach((obj) => {
                   defaultBuilding(obj.id, obj.id)
                })
             })
             .catch((error) => console.log(error))
       }
    })


   // //  BUILDING TO BATTERY
   //  const defaultBattery = (id, html) => {
   //    let opt = document.createElement('option')
   //    opt.value = id
   //    opt.innerHTML = html
   //    battery.appendChild(opt)
   // }

   // // removing all the option tags for book
   // const removeBatteryOptions = () => {
   //    while (battery.options.length != 0) {
   //       battery.remove(0)
   //    }
   // }

   // // when first loaded, all books will be displayed in the book dropdown
   // // this will remove everything
   // if (battery.value === '') {
   //    removeBatteryOptions()
   //    defaultBattery(0, 'Battery')
   // }

   // // change event on the author dropdown
   // building.addEventListener('change', (e) => {
   //    let id_value_string = e.target.value
   //    // a reset, if user selects default then we will remove everything and default back
   //    if (
   //       id_value_string === '' ||
   //       id_value_string === null ||
   //       id_value_string === 0
   //    ) {
   //       removeBatteryOptions()
   //       defaultBattery(0, 'Battery')
   //    } else {
   //       // fetch will call the controller which holds our data
   //       fetch(`/get_battry_by_building/${e.target.value}`)
   //          .then((response) => response.json())
   //          .then((data) => {
   //             removeBatteryOptions()
   //             defaultBattery(0, 'Battery')
   //             // loop through all our data and display only books we need
   //             data.forEach((obj) => {
   //                defaultBattery(obj.id, obj.name)
   //             })
   //          })
   //          .catch((error) => console.log(error))
   //    }
   // })



   // // BATTERY TO COLUMN
   // const defaultColumn = (id, html) => {
   //    let opt = document.createElement('option')
   //    opt.value = id
   //    opt.innerHTML = html
   //    book.appendChild(opt)
   // }

   // // removing all the option tags for book
   // const removeColumnOptions = () => {
   //    while (column.options.length != 0) {
   //       column.remove(0)
   //    }
   // }

   // // when first loaded, all books will be displayed in the book dropdown
   // // this will remove everything
   // if (column.value === '') {
   //    removeColumnOptions()
   //    defaultColumn(0, 'Column')
   // }

   // // change event on the author dropdown
   // battery.addEventListener('change', (e) => {
   //    let id_value_string = e.target.value
   //    // a reset, if user selects default then we will remove everything and default back
   //    if (
   //       id_value_string === '' ||
   //       id_value_string === null ||
   //       id_value_string === 0
   //    ) {
   //       removeColumnOptions()
   //       defaultColumn(0, 'Column')
   //    } else {
   //       // fetch will call the controller which holds our data
   //       fetch(`/get_column_by_battery/${e.target.value}`)
   //          .then((response) => response.json())
   //          .then((data) => {
   //             removeColumnOptions()
   //             defaulColumn(0, 'Column')
   //             // loop through all our data and display only books we need
   //             data.forEach((obj) => {
   //                defaultColumn(obj.id, obj.name)
   //             })
   //          })
   //          .catch((error) => console.log(error))
   //    }
   // })


   // // COLUMN TO ELEVATOR
   // const defaultElevator = (id, html) => {
   //    let opt = document.createElement('option')
   //    opt.value = id
   //    opt.innerHTML = html
   //    elevator.appendChild(opt)
   // }

   // // removing all the option tags for book
   // const removeElevatorOptions = () => {
   //    while (elevator.options.length != 0) {
   //       elevator.remove(0)
   //    }
   // }

   // // when first loaded, all books will be displayed in the book dropdown
   // // this will remove everything
   // if (elevator.value === '') {
   //    removeElevatorOptions()
   //    defaultElevator(0, 'Elevator')
   // }

   // // change event on the author dropdown
   // column.addEventListener('change', (e) => {
   //    let id_value_string = e.target.value
   //    // a reset, if user selects default then we will remove everything and default back
   //    if (
   //       id_value_string === '' ||
   //       id_value_string === null ||
   //       id_value_string === 0
   //    ) {
   //       removeElevatorOptions()
   //       defaultElevator(0, 'Elevator')
   //    } else {
   //       // fetch will call the controller which holds our data
   //       fetch(`/get_elevator_by_column/${e.target.value}`)
   //          .then((response) => response.json())
   //          .then((data) => {
   //             removeElevatorOptions()
   //             defaultElevator(0, 'Elevator')
   //             // loop through all our data and display only books we need
   //             data.forEach((obj) => {
   //                defaultElevator(obj.id, obj.name)
   //             })
   //          })
   //          .catch((error) => console.log(error))
   //    }
   // })
 

// FINAL BRACKET
})