import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

var dateStyle = {
  color: "red",
  marginLeft: "50%"
};
var ID = function() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};
var Clicked = function() {
  return false;
};

var trStyle = {
  border: "2px solid black"
};

class Grupa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studenti: [
        {
          nume: "Mia",
          prenume: "Diaconu",
          data_nasterii: {
            ziua: 16,
            luna: 4,
            anul: 1991,
            key: 1
          },
          sex: "F",
          nr_telefon: 72603559,
          cnp: 504801005787951,
          photo_url:
            "https://images.unsplash.com/photo-1521510186458-bbbda7aef46b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 8.286131823345473
        },
        {
          nume: "Aubrey",
          prenume: "Nitu",
          data_nasterii: {
            ziua: 24,
            luna: 0,
            anul: 1969,
            key: 2
          },
          sex: "M",
          nr_telefon: 77225432,
          cnp: 68407195726710,
          photo_url:
            "https://images.unsplash.com/photo-1455819760800-d2aa223b237a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 7.006054570921448
        },
        {
          nume: "Emily",
          prenume: "Dima",
          data_nasterii: {
            ziua: 21,
            luna: 6,
            anul: 1971,
            key: 3
          },
          sex: "F",
          nr_telefon: 77016003,
          cnp: 453373857705486,
          photo_url:
            "https://images.unsplash.com/photo-1501510920781-55fe4e2a2c84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 7.194461543688591
        },
        {
          nume: "Sofia",
          prenume: "Stanciu",
          data_nasterii: {
            ziua: 2,
            luna: 2,
            anul: 1982,
            key: 4
          },
          sex: "F",
          nr_telefon: 77596401,
          cnp: 994133144764362,
          photo_url:
            "https://images.unsplash.com/photo-1520639933053-bc786aeaaeff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 7.879522865087219
        },
        {
          nume: "Riley",
          prenume: "Nita",
          data_nasterii: {
            ziua: 26,
            luna: 10,
            anul: 1978,
            key: 5
          },
          sex: "M",
          nr_telefon: 71785995,
          cnp: 863375317289121,
          photo_url:
            "https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 5.710667175329867
        },
        {
          nume: "Olivia",
          prenume: "Diaconescu",
          data_nasterii: {
            ziua: 19,
            luna: 6,
            anul: 1994
          },
          sex: "M",
          nr_telefon: 74343650,
          cnp: 791791621436779,
          photo_url:
            "https://images.unsplash.com/photo-1544476671-bfd151728e9d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 7.317721624199265
        },
        {
          nume: "Evelyn",
          prenume: "Barbu",
          data_nasterii: {
            ziua: 9,
            luna: 3,
            anul: 1960
          },
          sex: "F",
          nr_telefon: 74208851,
          cnp: 642442081433752,
          photo_url:
            "https://images.unsplash.com/photo-1548686522-ca6fd6b40427?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 7.9309147566029665
        },
        {
          nume: "Amelia",
          prenume: "Tudor",
          data_nasterii: {
            ziua: 0,
            luna: 6,
            anul: 1996
          },
          sex: "F",
          nr_telefon: 73742725,
          cnp: 501817783536767,
          photo_url:
            "https://images.unsplash.com/photo-1527628217451-b2414a1ee733?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 9.560094942946932
        },
        {
          nume: "Ella",
          prenume: "Stoica",
          data_nasterii: {
            ziua: 14,
            luna: 5,
            anul: 1999
          },
          sex: "M",
          nr_telefon: 71085139,
          cnp: 273280400380883,
          photo_url:
            "https://images.unsplash.com/photo-1523916480930-3eb0627839bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 7.353420993690238
        },
        {
          nume: "Lily",
          prenume: "Stan",
          data_nasterii: {
            ziua: 12,
            luna: 4,
            anul: 1972
          },
          sex: "F",
          nr_telefon: 76976075,
          cnp: 345591447118201,
          photo_url:
            "https://images.unsplash.com/photo-1520639933053-bc786aeaaeff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 10.958535048842466
        },
        {
          nume: "Evelyn",
          prenume: "Ionita",
          data_nasterii: {
            ziua: 7,
            luna: 4,
            anul: 1964
          },
          sex: "F",
          nr_telefon: 78947926,
          cnp: 749671667670202,
          photo_url:
            "https://images.unsplash.com/photo-1517812989268-e75958710fb2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 5.940934273076253
        },
        {
          nume: "Charlotte",
          prenume: "Fratila",
          data_nasterii: {
            ziua: 20,
            luna: 3,
            anul: 1970
          },
          sex: "M",
          nr_telefon: 76561877,
          cnp: 94190884531530,
          photo_url:
            "https://images.unsplash.com/photo-1527585743534-7113e3211270?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 7.512603857746882
        },
        {
          nume: "Harper",
          prenume: "Nita",
          data_nasterii: {
            ziua: 0,
            luna: 9,
            anul: 1979
          },
          sex: "M",
          nr_telefon: 75052280,
          cnp: 784484864089275,
          photo_url:
            "https://images.unsplash.com/photo-1501510920781-55fe4e2a2c84?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 7.343562241148575
        },
        {
          nume: "Lily",
          prenume: "Dumitrescu",
          data_nasterii: {
            ziua: 21,
            luna: 3,
            anul: 1979
          },
          sex: "F",
          nr_telefon: 75758217,
          cnp: 150544134050602,
          photo_url:
            "https://images.unsplash.com/photo-1545583476-c6f2eafc7f47?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 9.347480872886713
        },
        {
          nume: "Aubrey",
          prenume: "Nitu",
          data_nasterii: {
            ziua: 14,
            luna: 4,
            anul: 1968
          },
          sex: "F",
          nr_telefon: 76523437,
          cnp: 820472999865576,
          photo_url:
            "https://images.unsplash.com/photo-1544476671-bfd151728e9d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 7.18293252070373
        },
        {
          nume: "Ava",
          prenume: "Stanciu",
          data_nasterii: {
            ziua: 13,
            luna: 11,
            anul: 1982
          },
          sex: "M",
          nr_telefon: 70783595,
          cnp: 613318129965399,
          photo_url:
            "https://images.unsplash.com/photo-1544961585-de6f13aa4fa0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 9.726275750881205
        },
        {
          nume: "Elizabeth",
          prenume: "Nistor",
          data_nasterii: {
            ziua: 28,
            luna: 9,
            anul: 1987
          },
          sex: "M",
          nr_telefon: 73247528,
          cnp: 52457606906796,
          photo_url:
            "https://images.unsplash.com/photo-1545583476-c6f2eafc7f47?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 8.243101521302023
        },
        {
          nume: "Abigail",
          prenume: "Dima",
          data_nasterii: {
            ziua: 29,
            luna: 1,
            anul: 1978
          },
          sex: "F",
          nr_telefon: 78917045,
          cnp: 776129081964766,
          photo_url:
            "https://images.unsplash.com/photo-1527585743534-7113e3211270?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 8.88951900752986
        },
        {
          nume: "Riley",
          prenume: "Marin",
          data_nasterii: {
            ziua: 2,
            luna: 5,
            anul: 1998
          },
          sex: "F",
          nr_telefon: 70384306,
          cnp: 474110510969800,
          photo_url:
            "https://images.unsplash.com/photo-1543575551-72a802fa5ffc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 8.959445408175892
        },
        {
          nume: "Evelyn",
          prenume: "Tudor",
          data_nasterii: {
            ziua: 7,
            luna: 9,
            anul: 1990
          },
          sex: "M",
          nr_telefon: 72577081,
          cnp: 308296784016842,
          photo_url:
            "https://images.unsplash.com/photo-1521510186458-bbbda7aef46b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          media: 6.084468837721094
        }
      ].map(x => {
        x.key = ID();
        return x;
      }),
      campuri: [
        {
          numeCamp: "nume",
          displayName: "Nume"
        },
        {
          numeCamp: "prenume",
          displayName: "Prenume"
        },
        {
          numeCamp: "media",
          displayName: "Media"
        }
      ],
      dateNoi: {},
      sortData: {
        directieSortare: 0,
        id_coloana: null
      },
      isLoaded: false,
      viewMode: "list",
      lastViewMode: "list"
    };
  }

  componentDidMount() {
    fetch(
      "http://5c6d7879d51de300146f5d5d.mockapi.io/stepit_duminica_16_30/avansat_studenti"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            studenti: [...this.state.studenti, ...result].map(x => {
              x.key = ID();
              return x;
            })
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  sortData = event => {
    var directieSortare;

    if (this.state.sortData.id_coloana == event.target.id) {
      directieSortare = this.state.sortData.directieSortare * -1;
    } else {
      directieSortare = 1;
    }

    this.setState({
      sortData: {
        id_coloana: event.target.id,
        directieSortare: directieSortare
      }
    });

    this.setState({
      studenti: this.state.studenti.sort((a, b) => {
        var x = a[event.target.id];
        var y = b[event.target.id];
        if (x > y) {
          return directieSortare;
        } else if (x < y) {
          return directieSortare * -1;
        }
        return 0;
      })
    });
  };
  clickRow = data => {
    this.setState({
      viewMode: "single",
      focusStudent: data
    });
  };
  changeView = () => {
    if (this.state.lastviewMode === "grid")
      this.setState({
        viewMode: "grid",
        lastViewMode: "list"
      });
    if (this.state.viewMode === "grid")
      this.setState({
        viewMode: "list"
      });
  };
  SingleMode = () => {
    var student = this.state.studenti.filter(x => {
      return x.key === this.state.focusStudent;
    })[0];
    return (
      <div>
        <button onClick={this.changeView}>Back</button>

        <h1 style={dateStyle}>Date</h1>

        <h3 style={{ color: "red" }}>Nume : {student.nume}</h3>

        <h3 style={{ color: "green" }}>Prenume : {student.prenume}</h3>

        <h3 style={{ color: "blue" }}>Ziua : {student.data_nasterii.ziua}</h3>
        <h3 style={{ color: "brown" }}>Luna : {student.data_nasterii.luna}</h3>
        <h3>Anul : {student.data_nasterii.anul}</h3>
        <h3 style={{ color: "orange" }}>Sex : {student.sex}</h3>
        <h3 style={{ color: "violet" }}>Telefon : {student.nr_telefon}</h3>
        <h3 style={{ color: "SlateBlue" }}>Telefon : {student.nr_telefon}</h3>
        <h3 style={{ color: "black" }}>Cnp : {student.cnp}</h3>
        <h3 style={{ color: "DodgerBlue" }}>Media : {student.media}</h3>
        <img src={student.photo_url} />
      </div>
    );
  };
  removeStudent = event => {
    this.setState({
      studenti: this.state.studenti.filter(x => {
        if (x.id == "pressed" || x.nume + x.prenume != event.target.id)
          return true;
      })
    });
  };

  updateSearch = event => {
    this.setState({
      searchWord: event.target.value
    });
  };

  updateData = event => {
    this.setState({
      dateNoi: {
        ...this.state.dateNoi,
        [event.target.id]: event.target.value
      }
    });
  };
  changeView = () => {
    if (this.state.lastViewMode === "grid")
      this.setState({
        viewMode: "grid",
        lastViewMode: "list"
      });
    if (this.state.lastViewMode === "list")
      this.setState({
        viewMode: "list"
      });
  };
  changeToSingleModeFromGrid = data => {
    this.setState({
      viewMode: "single",
      focusStudent: data,
      lastViewMode: "grid"
    });
  };
  changeToSingleModeFromList = data => {
    this.setState({
      viewMode: "single",
      focusStudent: data,
      lastViewMode: "list"
    });
    console.log(data);
  };
  insertData = event => {
    this.setState({
      studenti: [...this.state.studenti, this.state.dateNoi]
    });
  };
  viz(ev) {
    if (ev.target.id == "pressed")
      return (
        <div>
          <button>Back</button>
          <br />
          <h1>Date : </h1>
          <br />
        </div>
      );
  }
  changeToGridMode = () => {
    this.setState({
      viewMode: "grid"
    });
  };
  GridMode = () => {
    return (
      <div>
        <button onClick={this.changeView}>Back</button>
        {this.state.studenti.map(x => {
          return (
            <div>
              <img
                onClick={() => {
                  this.changeToSingleModeFromGrid(x.key);
                }}
                src={x.photo_url}
              />
            </div>
          );
        })}
      </div>
    );
  };
  ListMode = () => {
    return (
      <div>
        <select onChange={this.changeToGridMode}>
          <option>Select the viewmode</option>
          <option value="grid">Grid Mode</option>
          <option>List Mode</option>
        </select>
        <table>
          <tr key={ID()}>
            {this.state.campuri.map(x => {
              return (
                <th
                  style={trStyle}
                  key={ID()}
                  id={x.numeCamp}
                  onClick={this.sortData}
                >
                  {x.displayName}
                </th>
              );
            })}
          </tr>
          {this.state.studenti.map(student => {
            if (
              student.nume.search(new RegExp(this.state.searchWord, "i")) != 0
            ) {
              return null;
            }
            return (
              <tr>
                {this.state.campuri.map(camp => {
                  return (
                    <th
                      style={trStyle}
                      onClick={() =>
                        this.changeToSingleModeFromList(student.key)
                      }
                      key={ID()}
                    >
                      {student[camp.numeCamp]}
                    </th>
                  );
                })}
                <th>
                  <button
                    onClick={this.removeStudent}
                    id={student.nume + student.prenume}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}

          <tr key={ID()}>
            {this.state.campuri.map(x => {
              return (
                <th key={ID()}>
                  <input
                    className="input"
                    onBlur={this.updateData}
                    placeholder={x.displayName}
                    id={x.numeCamp}
                  />
                </th>
              );
            })}
            <button onClick={this.insertData}>Insert</button>
          </tr>
          <br />
          <tr>
            <input
              className="input"
              placeholder="Search"
              onChange={this.updateSearch}
            />
          </tr>
        </table>
      </div>
    );
  };

  render() {
    if (this.state.isLoaded == false) {
      return <h1>Data is loading... please wait</h1>;
    }
    if (this.state.viewMode === "list") return <this.ListMode />;
    else if (this.state.viewMode == "single") return <this.SingleMode />;
    else if (this.state.viewMode === "grid") return <this.GridMode />;
  }
}

ReactDOM.render(<Grupa />, document.getElementById("root"));

ReactDOM.render(<Grupa />, document.getElementById("root"));
