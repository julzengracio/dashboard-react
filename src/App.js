import "./App.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHistory,
  faUsers,
  faCog,
  faUniversity,
  faBell,
  faEnvelope,
  faCaretDown,
  faLink,
  faPiggyBank,
  faCoins,
  faSearch,
  faUtensils,
  faHouseUser,
  faGamepad,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import Chart from "chart.js/auto";

/* UTILITY FUNCTIONS */

// Gradient color for the Bars Chart
let width, height, gradient;
function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0.1, "rgb(50, 50, 50)");
    gradient.addColorStop(0.2, "rgb(50, 50 ,50)");
    gradient.addColorStop(0.7, "rgb(150, 150, 150)");
    // gradient.addColorStop(0, "rgb(51, 51, 51)");
    // gradient.addColorStop(0.5, "silver");
    // gradient.addColorStop(1, "rgb(255, 255, 255)");
  }

  return gradient;
}
/*  */

function Card({ name, icon }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://random-data-api.com/api/number/random_number")
      .then((res) => res.json())
      .then((data) => setData((data.decimal * 125).toFixed(2)))
      .catch(console.error);
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-icon">
          <FontAwesomeIcon icon={icon} size="2x" className="text-shadow" />
        </div>
        <h4 className="card-title">{name}</h4>
        <p>&euro; {data}</p>
      </div>
    </div>
  );
}

function User({ user }) {
  if (user) {
    return (
      <div className="user-info d-flex">
        <img src={user.picture.thumbnail} className="user-img" alt="user"></img>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    );
  }

  return null;
}

function VisaCard({ user }) {
  if (user) {
    return (
      <div className="visa-card">
        <div className="card-body">
          <div className="card-visa-name">Bank of Awesome</div>
          <div className="card-visa-number">4562 1122 2592 1162</div>
          <div className="card-visa-details d-flex justify-content-between">
            <span>
              <span className="small">01/25</span>
              <p>
                {user.name.first} {user.name.last}
              </p>
            </span>
            <FontAwesomeIcon icon={faCcVisa} size="2x" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function AnalyticsChart() {
  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const data = {
      labels: months,
      datasets: [
        {
          label: "Monthly Spends",
          data: [412, 347, 580, 989, 540, 367, 452, 1097, 799, 455, 300, 877],
          backgroundColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              return null;
            }
            return "rgb(0, 153, 255)";
            // return getGradient(ctx, chartArea);
          },
          hoverBackgroundColor: "rgb(255, 255, 255)",
          borderWidth: 1,
          borderColor: "white"
        },
      ],
    };

    const ctx = document.getElementById("analyticsChart");
    new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        tension: 0.3,
        responsive: true,
      },
    });
  }, []);

  return (
    <div className="chart-container" style={{ position: "relative" }}>
      <canvas id="analyticsChart"></canvas>
    </div>
  );
}

function SummaryChart() {
  useEffect(() => {
    const data = {
      labels: ["Restaurants", "Utilities", "Entertainment", "Groceries"],
      datasets: [
        {
          label: "Transactions",
          data: [8, 3, 2, 4],
          backgroundColor: [
            "rgb(0, 179, 60)",
            "rgb(255, 83, 26)",
            "rgb(255, 204, 0)",
            "rgb(0, 153, 255)"
          ],
          hoverOffset: 4,
        },
      ],
    };

    const ctx = document.getElementById("summaryChart");
    new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        borderWidth: 1,
        borderColor: "silver",
        plugins:{
          legend: {
            display: false,
            position: "top",
            align: "start"
          }
        }
      }
    });
  }, []);

  return (
    <div className="chart-container" style={{ position: "relative" }}>
      <canvas id="summaryChart"></canvas>
    </div>
  );
}

function HistoryTable({ users }) {
  if (users) {
    return (
      <table className="table">
        <tbody>
          {users.map((user) => (
            <tr>
              <td>
                <img
                  src={user.picture.thumbnail}
                  className="img-circle"
                  alt="user"
                ></img>
              </td>
              <td className="history-user">
                <span>
                  {user.name.first}&nbsp;{user.name.last}
                </span>
                <p className="small" style={{ margin: 0 }}>
                  Transfer
                </p>
              </td>
              <td>&euro;&nbsp;{Math.floor(Math.random() * 5000)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return null;
}

function App() {
  const transactionSummary = [
    {
      id: 0,
      category: "Restaurants",
      count: 8,
      amount: 412.2,
      classColor: "icon-success",
      icon: <FontAwesomeIcon icon={faUtensils} size="lg" fixedWidth />,
    },
    {
      id: 1,
      category: "Utilities",
      count: 3,
      amount: 987.71,
      classColor: "icon-info",
      icon: <FontAwesomeIcon icon={faHouseUser} size="lg" fixedWidth />,
    },
    {
      id: 2,
      category: "Entertainment",
      count: 2,
      amount: 139.98,
      classColor: "icon-warning",
      icon: <FontAwesomeIcon icon={faGamepad} size="lg" fixedWidth />,
    },
    {
      id: 3,
      category: "Groceries",
      count: 4,
      amount: 139.98,
      classColor: "icon-primary",
      icon: <FontAwesomeIcon icon={faShoppingBag} size="lg" fixedWidth />,
    },
  ];

  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
      .catch(console.error);

    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <aside className="sidebar col-1">
          <nav className="nav">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faHome} size="lg" fixedWidth />
            </a>
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faHistory} size="lg" fixedWidth />
            </a>
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faUsers} size="lg" fixedWidth />
            </a>
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faCog} size="lg" fixedWidth />
            </a>
          </nav>
        </aside>
        <div className="col-11">
          <div className="row">
            <header className="d-flex justify-content-between align-items-center flex-responsive">
              <div className="col-4">
                <h1>Dashboard</h1>
              </div>
              <div className="col-4 input-group">
                <div className="align-self-center input-icon">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <div className="col-1"></div>
              <div className="col-3 d-flex justify-content-between">
                <div className="user-control">
                  <FontAwesomeIcon icon={faBell} size="lg" />
                </div>
                <div className="user-control">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </div>
                <div className="user-control">
                  <User user={user} />
                </div>
              </div>
            </header>
          </div>
          <div className="row">
            <main className="col-8">
              <div className="row">
                <div className="d-flex justify-content-between flex-responsive">
                  <Card name="Main Account" icon={faUniversity} />
                  <Card name="Savings Account" icon={faPiggyBank} />
                  <Card name="Linked Account" icon={faLink} />
                  <Card name="Crypto Account" icon={faCoins} />
                </div>
              </div>
              <div className="row">
                <h1>Analytics</h1>
                <AnalyticsChart />
              </div>
              <div className="row">
                <h1>Transfers &amp; Payments</h1>
                <HistoryTable users={users} />
              </div>
            </main>
            <div className="col-1"></div>
            <aside className="col-3">
              <VisaCard user={user} />
              <div className="row">
                <p>Transaction Breakdown</p>
                <SummaryChart />
              </div>
              <div className="row">
                <p>Summary</p>
                <ul className="list-items">
                  {transactionSummary.map((item) => (
                    <li key={item.id}>
                      <div className={`list-item-icon ${item.classColor}`}>{item.icon}</div>
                      <div className="list-item-category">
                        <h5>{item.category}</h5>
                        <p className="small">
                          {item.count.toString()} Transactions
                        </p>
                      </div>
                      <div>&euro;&nbsp;{item.amount.toFixed(2).toString()}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
