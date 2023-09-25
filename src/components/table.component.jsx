import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function TableComponent() {
	const filesSelector = useSelector((state) => state.file.files);
	const [files, setFiles] = useState([]);
	useEffect(() => {
		setFiles(filesSelector);
	}, [filesSelector]);
	return (
		<Table striped bordered hover responsive>
			<thead>
				<tr>
					<th>File Name</th>
					<th>Text</th>
					<th>Number</th>
					<th>Hex</th>
				</tr>
			</thead>
			<tbody>
				{files.map((file, index) => (
					<>
						{file.lines.map((line, index) => (
							<tr key={index}>
								<td>{file.file}</td>
								<td>{line.text}</td>
								<td>{line.number}</td>
								<td>{line.hex}</td>
							</tr>
						))}
					</>
				))}
			</tbody>
		</Table>
	);
}
export default TableComponent;
