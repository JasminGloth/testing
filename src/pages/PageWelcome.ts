import cities from "../data/cities.json";
import waren from "../data/Patrizier 4/waren.json"

export const PageWelcome = () => {    
 
  return /*html*/ `
    <div class="page pageWelcome">
      <section class="bedarfsrechner">
        <h2>Bedarfsrechner</h2>
        <form action="">
          <label for="stadt">Stadt</label>
          <select name="stadt" id="stadtSelect">
            ${cities.map((city) => {
              return `<option value="${city.name}">${city.name}</option>`;
            })}            
          </select>
          <br>
          <input type="text">
          <h2 id="p4waren1">0</h2>
          <input type="text">
          <h2 id="p4waren2">0</h2>
          <input type="text">
          <h2 id="p4waren3">0</h2>
          <input type="text">
          <h2 id="p4waren4">0</h2>
          <input type="text">
          <h2 id="p4waren5">0</h2>
        </form>
      </section>
      <section>
        <form action="">
		Bedarf für
			<input type="text" name="" placeholder="Anzahl" id="p4bewohneranzahl">
			<label for="bewohner">Bewohner</label>
		für
			<input type="text" name="" placeholder="volle Tage" id="p4tage">
		Tage
			<button class="btnProcessbdrP4">berechnen</button>
			<input type="reset">
		</form>
		<section class="bedarfsrechner">
			<table>
				<thead>
					<tr>
						<td>Ware</td>
						<td>Anzahl</td>
						<td>Ware</td>
						<td>Anzahl</td>
						<td>Gesamt</td>
					</tr>
				</thead>
        		<tbody>
					<tr>
						<td>Holz</td>
						<td class="p4bdrholz">0</td>
						<td>Tuch</td>
						<td class="p4bdrtuch">0</td>
					</tr>
					<tr>
						<td>Ziegel</td>
						<td class="p4bdrziegel">0</td>
						<td>Bier</td>
						<td class="p4bdrbier">0</td>
						<td>Profit</td>
						<td id="p4bdrprofit">0</td>
					</tr>
					<tr>
						<td>Getreide</td>
						<td class="p4bdrgetreide">0</td>
						<td>Stockfisch</td>
						<td class="p4bdrstockfisch">0</td>
					</tr>
					<tr>
						<td>Hanf</td>
						<td class="p4bdrhanf">0</td>
						<td>Kleidung</td>
						<td class="p4bdrkleidung">0</td>
						<td>Konvoigröße</td>
						<td id="p4bdrkonvoi">0</td>
					</tr>
					<tr>
						<td>Wolle</td>
						<td class="p4bdrwolle">0</td>
						<td>Käse</td>
						<td class="p4bdrkäse">0</td>
					</tr>
					<tr>
						<td>Rohmetalle</td>
						<td class="p4bdrrohmetalle">0</td>
						<td>Pech</td>
						<td class="p4bdrpech">0</td>
					</tr>
					<tr>
						<td>Honig</td>
						<td class="p4bdrhonig">0</td>
						<td>Felle</td>
						<td class="p4bdrfelle">0</td>
					</tr>
					<tr>
						<td>Salz</td>
						<td class="p4bdrsalz">0</td>
						<td>Fleisch</td>
						<td class="p4bdrfleisch">0</td>
					</tr>
					<tr>
						<td>Metallwaren</td>
						<td class="p4bdrmetallwaren">0</td>
						<td>Wein</td>
						<td class="p4bdrwein">0</td>
					</tr>
					<tr>
						<td>Met</td>
						<td class="p4bdrmet">0</td>
						<td>Gewürze</td>
						<td class="p4bdrgewürze">0</td>						
					</tr>
				</tbody>
       		</table>
      	</section>
    </div>
  `;
};

export const attachPageWelcomeEvents = () => {
  const selectElement = document.getElementById(
    "stadtSelect"
  ) as HTMLSelectElement;
  console.log(selectElement)
  const waren1Element = document.getElementById(
    "p4waren1"
  ) as HTMLHeadingElement;
  const waren2Element = document.getElementById(
    "p4waren2"
  ) as HTMLHeadingElement;
  const waren3Element = document.getElementById(
    "p4waren3"
  ) as HTMLHeadingElement;
  const waren4Element = document.getElementById(
    "p4waren4"
  ) as HTMLHeadingElement;
  const waren5Element = document.getElementById(
    "p4waren5"
  ) as HTMLHeadingElement;

  // Event-Listener für die Auswahl der Stadt
  selectElement.addEventListener("change", () => {
    const selectedCity = cities.find(
      (city) => city.name === selectElement.value
    );

    if (selectedCity) {
      waren1Element.textContent = selectedCity.waren[0];
      waren2Element.textContent = selectedCity.waren[1];
      waren3Element.textContent = selectedCity.waren[2];
      waren4Element.textContent = selectedCity.waren[3];
      waren5Element.textContent = selectedCity.waren[4];
    }
  });
};

export const attachPageWelcomeEvents2 = () => {
  const btn = document.querySelector(".btnProcessbdrP4");
  btn?.addEventListener("click", (e: Event) => {
    e.preventDefault();

    const _p4bewohneranzahlElem =
      document.querySelector<HTMLInputElement>("#p4bewohneranzahl");

    const _p4tageElem = document.querySelector<HTMLInputElement>("#p4tage");

    const _p4bdrkonvoiElem =
      document.querySelector<HTMLInputElement>("#p4bdrkonvoi");

    const _p4bdrholzElem =
      document.querySelector<HTMLInputElement>(".p4bdrholz");
    const _p4bdholz = waren.find((m) => m.ware === "Holz")?.bd;

    const _p4bdrziegelElem =
      document.querySelector<HTMLInputElement>(".p4bdrziegel");
    const _p4bdziegel = waren.find((m) => m.ware === "Ziegel")?.bd;

    const _p4bdrgetreideElem =
      document.querySelector<HTMLInputElement>(".p4bdrgetreide");
    const _p4bdgetreide = waren.find((m) => m.ware === "Getreide")?.bd;

    const _p4bdrhanfElem =
      document.querySelector<HTMLInputElement>(".p4bdrhanf");
    const _p4bdhanf = waren.find((m) => m.ware === "Hanf")?.bd;

    const _p4bdrwolleElem =
      document.querySelector<HTMLInputElement>(".p4bdrwolle");
    const _p4bdwolle = waren.find((m) => m.ware === "Wolle")?.bd;

    const _p4bdrrohmetalleElem =
      document.querySelector<HTMLInputElement>(".p4bdrrohmetalle");
    const _p4bdrohmetalle = waren.find((m) => m.ware === "Rohmetalle")?.bd;

    const _p4bdrhonigElem =
      document.querySelector<HTMLInputElement>(".p4bdrhonig");
    const _p4bdhonig = waren.find((m) => m.ware === "Honig")?.bd;

    const _p4bdrsalzElem =
      document.querySelector<HTMLInputElement>(".p4bdrsalz");
    const _p4bdsalz = waren.find((m) => m.ware === "Salz")?.bd;

    const _p4bdrmetallwarenElem =
      document.querySelector<HTMLInputElement>(".p4bdrmetallwaren");
    const _p4bdmetallwaren = waren.find((m) => m.ware === "Metallwaren")?.bd;

    const _p4bdrmetElem =
      document.querySelector<HTMLInputElement>(".p4bdrmet");
    const _p4bdmet = waren.find((m) => m.ware === "Met")?.bd;

    const _p4bdrtuchElem =
      document.querySelector<HTMLInputElement>(".bdrtuch");
    const _p4bdtuch = waren.find((m) => m.ware === "Tuch")?.bd;

    const _p4bdrbierElem =
      document.querySelector<HTMLInputElement>(".p4bdrbier");
    const _p4bdbier = waren.find((m) => m.ware === "Bier")?.bd;

    const _p4bdrstockfischElem =
      document.querySelector<HTMLInputElement>(".p4bdrstockfisch");
    const _p4bdstockfisch = waren.find((m) => m.ware === "Stockfisch")?.bd;

    const _p4bdrkleidungElem = document.querySelector<HTMLInputElement>(".p4bdrkleidung");
    const _p4bdkleidung = waren.find((m) => m.ware === "Kleidung")?.bd;

    const _p4bdrkäseElem = document.querySelector<HTMLInputElement>(".p4bdrkäse");
    const _p4bdkäse = waren.find((m) => m.ware === "Käse")?.bd;

    const _p4bdrpechElem =
      document.querySelector<HTMLInputElement>(".p4bdrpech");
    const _p4bdpech = waren.find((m) => m.ware === "Pech")?.bd;

    const _p4bdrfelleElem =
      document.querySelector<HTMLInputElement>(".p4bdrfelle");
    const _p4bdfelle = waren.find((m) => m.ware === "Felle")?.bd;

    const _p4bdrfleischElem = document.querySelector<HTMLInputElement>(".p4bdrfleisch");
    const _p4bdfleisch = waren.find((m) => m.ware === "Fleisch")?.bd;

    const _p4bdrweinElem = document.querySelector<HTMLInputElement>(".p4bdrwein");
    const _p4bdwein = waren.find((m) => m.ware === "Wein")?.bd;

    const _p4bdrgewürzeElem =
      document.querySelector<HTMLInputElement>(".p4bdrgewürze");
    const _p4bdgewürze = waren.find((m) => m.ware === "Gewürze")?.bd;

    if (
      _p4bewohneranzahlElem &&
      _p4tageElem &&
      _p4bdrholzElem &&
      _p4bdholz &&
      _p4bdrziegelElem &&
      _p4bdziegel &&
      _p4bdrgetreideElem &&
      _p4bdgetreide &&
      _p4bdrhanfElem &&
      _p4bdhanf &&
      _p4bdrwolleElem &&
	  _p4bdwolle &&
	  _p4bdrrohmetalleElem &&
	  _p4bdrohmetalle &&
	  _p4bdrhonigElem &&
	  _p4bdhonig &&
	  _p4bdrsalzElem &&
	  _p4bdsalz &&
	  _p4bdrmetallwarenElem &&
	  _p4bdmetallwaren &&
	  _p4bdrmetElem &&
	  _p4bdmet &&
	  _p4bdrtuchElem &&
	  _p4bdtuch &&
	  _p4bdrbierElem &&
	  _p4bdbier &&
	  _p4bdrstockfischElem &&
	  _p4bdstockfisch &&
	  _p4bdrkleidungElem &&
	  _p4bdkleidung &&
	  _p4bdrkäseElem &&
	  _p4bdkäse &&
	  _p4bdrpechElem &&
	  _p4bdpech &&
	  _p4bdrfelleElem &&
	  _p4bdfelle &&
	  _p4bdrfleischElem &&
	  _p4bdfleisch &&
	  _p4bdrweinElem &&
	  _p4bdwein &&
	  _p4bdrgewürzeElem &&
	  _p4bdgewürze &&
	  _p4bdrkonvoiElem
    ) {
      const p4bewohneranzahlElem = _p4bewohneranzahlElem;
      const p4tageElem = _p4tageElem;

      const p4bdrholzElem = _p4bdrholzElem;
      const p4bdholz = _p4bdholz;
      p4bdrholzElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) * p4bdholz * Number(p4tageElem.value)
        )
      );

      const p4bdrziegelElem = _p4bdrziegelElem;
      const p4bdziegel = _p4bdziegel;
      p4bdrziegelElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) * p4bdziegel * Number(p4tageElem.value)
        )
      );

      const p4bdrgetreideElem = _p4bdrgetreideElem;
      const p4bdgetreide = _p4bdgetreide;
      p4bdrgetreideElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) * p4bdgetreide * Number(p4tageElem.value)
        )
      );

      const p4bdrhanfElem = _p4bdrhanfElem;
      const p4bdhanf = _p4bdhanf;
      p4bdrhanfElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) * p4bdhanf * Number(p4tageElem.value)
        )
      );

      const p4bdrwolleElem = _p4bdrwolleElem;
      const p4bdwolle = _p4bdwolle;
      p4bdrwolleElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) * p4bdwolle * Number(p4tageElem.value)
        )
      );

      const p4bdrrohmetalleElem = _p4bdrrohmetalleElem;
      const p4bdrohmetalle = _p4bdrohmetalle;
      p4bdrrohmetalleElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) * p4bdrohmetalle * Number(p4tageElem.value)
        )
      );

      const p4bdrhonigElem = _p4bdrhonigElem;
      const p4bdhonig = _p4bdhonig;
      p4bdrhonigElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) * p4bdhonig * Number(p4tageElem.value)
        )
      );

      const p4bdrsalzElem = _p4bdrsalzElem;
      const p4bdsalz = _p4bdsalz;
      p4bdrsalzElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) * p4bdsalz * Number(p4tageElem.value)
        )
      );

      const p4bdrmetallwarenElem = _p4bdrmetallwarenElem;
      const p4bdmetallwaren = _p4bdmetallwaren;
      p4bdrmetallwarenElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) * p4bdmetallwaren * Number(p4tageElem.value)
        )
      );

      const p4bdrmetElem = _p4bdrmetElem;
      const p4bdmet = _p4bdmet;
      p4bdrmetElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) *
            p4bdmet *
            Number(p4tageElem.value)
        )
      );

      const p4bdrtuchElem = _p4bdrtuchElem;
      const p4bdtuch = _p4bdtuch;
      p4bdrtuchElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) *
            p4bdtuch *
            Number(p4tageElem.value)
        )
      );

      const p4bdrbierElem = _p4bdrbierElem;
      const p4bdbier = _p4bdbier;
      p4bdrbierElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) *
            p4bdbier *
            Number(p4tageElem.value)
        )
      );

      const p4bdrstockfischElem = _p4bdrstockfischElem;
      const p4bdstockfisch = _p4bdstockfisch;
      p4bdrstockfischElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) *
            p4bdstockfisch *
            Number(p4tageElem.value)
        )
      );

      const p4bdrkleidungElem = _p4bdrkleidungElem;
      const p4bdkleidung = _p4bdkleidung;
      p4bdrkleidungElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) *
            p4bdkleidung *
            Number(p4tageElem.value)
        )
      );

      const p4bdrkäseElem = _p4bdrkäseElem;
      const p4bdkäse = _p4bdkäse;
      p4bdrkäseElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) *
            p4bdkäse *
            Number(p4tageElem.value)
        )
      );

      const p4bdrpechElem = _p4bdrpechElem;
      const p4bdpech = _p4bdpech;
      p4bdrpechElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) * p4bdpech * Number(p4tageElem.value)
        )
      );

      const p4bdrfelleElem = _p4bdrfelleElem;
      const p4bdfelle = _p4bdfelle;
      p4bdrfelleElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) * p4bdfelle * Number(p4tageElem.value)
        )
      );

      const p4bdrfleischElem = _p4bdrfleischElem;
      const p4bdfleisch = _p4bdfleisch;
      p4bdrfleischElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) *
            p4bdfleisch *
            Number(p4tageElem.value)
        )
      );

      const p4bdrweinElem = _p4bdrweinElem;
      const p4bdwein = _p4bdwein;
      p4bdrweinElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) *
            p4bdwein *
            Number(p4tageElem.value)
        )
      );

      const p4bdrgewürzeElem = _p4bdrgewürzeElem;
      const p4bdgewürze = _p4bdgewürze;
      p4bdrgewürzeElem.innerHTML = String(
        Math.round(
          Number(p4bewohneranzahlElem.value) *
            p4bdgewürze *
            Number(p4tageElem.value)
        )
      );
      const p4bdrkonvoiElem = _p4bdrkonvoiElem;
      p4bdrkonvoiElem.innerHTML = String(
        Number(p4bdrholzElem.innerHTML) +
          Number(p4bdrziegelElem.innerHTML) +
          Number(p4bdrgetreideElem.innerHTML) +
          Number(p4bdrhanfElem.innerHTML) +
          Number(p4bdrwolleElem.innerHTML) +
          Number(p4bdrrohmetalleElem.innerHTML) +
          Number(p4bdrhonigElem.innerHTML) +
          Number(p4bdrsalzElem.innerHTML) +
          Number(p4bdrmetallwarenElem.innerHTML) +
          Number(p4bdrmetElem.innerHTML) +
          Number(p4bdrtuchElem.innerHTML) +
          Number(p4bdrbierElem.innerHTML) +
          Number(p4bdrstockfischElem.innerHTML) +
          Number(p4bdrkleidungElem.innerHTML) +
          Number(p4bdrkäseElem.innerHTML) +
          Number(p4bdrpechElem.innerHTML) +
          Number(p4bdrfelleElem.innerHTML) +
          Number(p4bdrfleischElem.innerHTML) +
          Number(p4bdrweinElem.innerHTML) +
          Number(p4bdrgewürzeElem.innerHTML)
      );
    } else {
      const _errorMessageElem =
        document.querySelector<HTMLInputElement>(".errorMessage");

      if (_errorMessageElem) {
        const errorMessageElem = _errorMessageElem;
        errorMessageElem.innerHTML = "There was an error on the site.";
      }
    }
  });
};

