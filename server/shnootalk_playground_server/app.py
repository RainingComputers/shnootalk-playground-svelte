from typing import Dict, Optional
import os
import secrets
import shutil

from fastapi import FastAPI

from shnootalk_playground_server.compiler import compile_shnootalk


WORK_DIR_BASE = os.getenv("WORK_DIR_BASE", os.getcwd())
TIMEOUT = int(os.getenv("TIMEOUT", "5"))


app = FastAPI()


def gen_work_dir(programs: Dict[str, str]) -> str:
    work_dir = os.path.join(WORK_DIR_BASE, secrets.token_hex(16))
    os.mkdir(work_dir)

    for file_name, content in programs.items():
        if file_name == "input":
            continue

        with open(os.path.join(work_dir, file_name), "w") as file:
            file.write(content)

    return work_dir


@app.post("/api/v2/compile")
def compile(programs: Dict[str, str]) -> Dict[str, Optional[str]]:
    work_dir = gen_work_dir(programs)

    result, output = compile_shnootalk(
        work_dir,
        TIMEOUT,
        programs.get("input", "")
    )

    # shutil.rmtree(work_dir)

    return {"result": result, "output": output}
