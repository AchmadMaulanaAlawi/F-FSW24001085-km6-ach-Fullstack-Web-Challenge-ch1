import cars from "./cars.json" assert { "type": "json" }

const date_element = document.getElementById("date")
const cards_container = document.getElementById("cards-container")
const capacity_element = document.getElementById("capacity")
const dropdown_menu_time = document.getElementById("dropdown-menu-time")
const dropdown_menu_driver = document.getElementById("dropdown-menu-driver")
const search_button = document.getElementById("search-button")
const driver_type_button_text = document.getElementById(
  "driver-type-button-text"
)
const time_button_text = document.getElementById("time-button-text")

let time = ""
let date = ""
let driver = ""
let capacity = 0

search_button.addEventListener("click", () => {
  if (time !== "" || date !== "" || driver !== "") {
    date = ""
    capacity = 0
    cards_container.innerHTML = ""
    date = date_element.value
    capacity = capacity_element.value

    console.log(cards_container.innerHTML)

    cars.map((car) => {
      if (
        driver === car.driver_type &&
        date === car.available_at &&
        time <= car.time &&
        capacity <= car.capacity
      ) {
        cards_container.innerHTML += `
          <div class="col">
            <div class="card">
              <div class="img-container p-3">
                <img
                  src=${car.image}
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <div class="card-text">
                  <p class="mb-2">${car.name}</p>
                  <h5 class="fw-bold mb-2">Rp. ${car.price}/Jam</h5>
                  <p>
                    ${car.desc}
                  </p>
                </div>
                <div class="card-points d-flex flex-column gap-2">
                  <div class="capacity d-flex gap-3 align-items-center">
                    <div class="icon">
                      <img src="assets/icons/capacity.png" />
                    </div>
                    <div>${car.capacity}</div>
                  </div>
                  <div class="type d-flex gap-3 align-items-center">
                    <div class="icon">
                      <img src="assets/icons/type.png" />
                    </div>
                    <div>${car.type}</div>
                  </div>
                  <div class="year d-flex gap-3 align-items-center">
                    <div class="icon">
                      <img src="assets/icons/year.png" />
                    </div>
                    <div>${car.year}</div>
                  </div>
                </div>
                <div class="card-button w-100 mt-4">
                  <a
                    href="#"
                    class="btn btn-success w-100"
                    >Pilih</a
                  >
                </div>
              </div>
            </div>
          </div>
        `
      }
    })
  } else {
    cards_container.parentNode.innerHTML = `<div class="alert alert-danger d-flex align-items-center " role="alert">
  <div>
    Tipe driver, tanggal, dan waktu jemput wajib diisi!
  </div>
</div>`
  }
})

dropdown_menu_driver.addEventListener("click", (e) => {
  driver = ""
  driver = e.target.innerText
  driver_type_button_text.innerText = e.target.innerText
})

dropdown_menu_time.addEventListener("click", (e) => {
  time = ""
  time = e.target.innerText
  time_button_text.innerText = e.target.innerText
})
