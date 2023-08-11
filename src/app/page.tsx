import { Link1Icon } from "@radix-ui/react-icons";
import { Button } from "@ui/button";
import { TextField } from "@ui/text-field";

export default function Home() {
	return (
		<div className="container m-auto">
			<h1 className="text-heading-m">Let’s get you started</h1>

			<TextField id="name" placeholder="TextField is Empty" label="Text field" Icon={Link1Icon} />

			<Button variant="outline">Button</Button>
		</div>
	);
}
