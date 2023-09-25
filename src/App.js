import { useEffect, useState } from "react";
import "./App.css";
import HeaderComponent from "./components/header.component";
import TableComponent from "./components/table.component";
import { setFiles } from "./store/fileSlice";
import { useDispatch } from "react-redux";
import { getFiles } from "./services/file.service";
import { Button, Form, InputGroup } from "react-bootstrap";

function App() {
	const dispatch = useDispatch();

	const [loader, setLoader] = useState(true);
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		getFilesData();
	}, []);
	const getFilesData = async () => {
		setLoader(true);
		await getFiles(searchInput ?? null)
			.then((response) => {
				dispatch(setFiles(response.data));
				setLoader(false);
			})
			.catch((error) => {
				setLoader(false);
			});
	};

	return (
		<div className='App'>
			<HeaderComponent></HeaderComponent>
			<main>
				<div className='container-fluid'>
					<div className='filter'>
						<div className='input-filter'>
							<InputGroup>
								<Form.Control
									placeholder='Search by filename'
									aria-label="Recipient's username"
									aria-describedby='basic-addon2'
									type='search'
									value={searchInput}
									onChange={(e) => setSearchInput(e.target.value)}
								/>
								<Button
									onClick={getFilesData}
									variant='outline-secondary'
									id='button-addon2'
								>
									Search
								</Button>
							</InputGroup>
						</div>

						{loader ? <div className='loader'></div> : null}
					</div>
					<TableComponent></TableComponent>
				</div>
			</main>
		</div>
	);
}

export default App;
