import { LitElement, html } from "lit";

class LoginCard extends LitElement {
	static properties = {
		email: { type: String },
		otpSent: { type: Boolean },
	};

	constructor() {
		super();
		this.email = "";
		this.otpSent = false;
	}

	createRenderRoot() {
		return this; // disable shadow DOM
	}

	sendOtp() {
		this.otpSent = true;
		alert(`OTP sent to ${this.email}`);
	}

	login() {
		alert("Logged in (fake)");
		this.dispatchEvent(new CustomEvent("logged-in", { detail: { email: this.email } }));
	}

	render() {
		return html`
			<div>
				<h3>Login</h3>
				<input type="email" placeholder="Uni Email" .value=${this.email}
					@input=${e => this.email = e.target.value} />
				${this.otpSent ? html`
					<input type="text" placeholder="Enter OTP" />
					<button @click=${this.login}>Login</button>
				` : html`
					<button @click=${this.sendOtp}>Send OTP</button>
				`}
			</div>
		`;
	}
}
customElements.define("login-card", LoginCard);

class TicketDashboard extends LitElement {
	static properties = {
		balance: { type: Number },
		scanValue: { type: String },
	};

	constructor() {
		super();
		this.balance = 5;
		this.scanValue = "";
	}

	createRenderRoot() {
		return this;
	}

	handleScan() {
		alert(`Scanned: ${this.scanValue}`);
		this.balance--;
		this.scanValue = "";
	}

	render() {
		return html`
			<div>
				<h3>Your Balance</h3>
				<p><strong>${this.balance}</strong> curry tickets</p>
				<input placeholder="Scan code / NFC input" .value=${this.scanValue}
					@input=${e => this.scanValue = e.target.value} />
				<button @click=${this.handleScan}>Use Ticket</button>
			</div>
		`;
	}
}
customElements.define("ticket-dashboard", TicketDashboard);

class LeaderboardCard extends LitElement {
	constructor() {
		super();
		this.stats = [
			{ name: "Alice", tickets: 12, games: 3 },
			{ name: "Bob", tickets: 9, games: 4 },
			{ name: "Charlie", tickets: 6, games: 2 },
		];
	}

	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<div>
				<h3>Leaderboard</h3>
				<table>
					<tr><th>Name</th><th>Tickets</th><th>Games Won</th></tr>
					${this.stats.map(row => html`
						<tr><td>${row.name}</td><td>${row.tickets}</td><td>${row.games}</td></tr>
					`)}
				</table>
			</div>
		`;
	}
}
customElements.define("leaderboard-card", LeaderboardCard);
