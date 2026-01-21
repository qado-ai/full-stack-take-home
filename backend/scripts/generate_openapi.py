import json
from pathlib import Path

from src.app import app


def generate_spec():
    schema = app.openapi()

    root_dir = Path(__file__).parent.parent
    output_path = root_dir / "openapi.json"

    with open(output_path, "w") as f:
        json.dump(schema, f, indent=2)

    print(f"✅ OpenAPI schema generated at {output_path.absolute()}")


if __name__ == "__main__":
    generate_spec()
