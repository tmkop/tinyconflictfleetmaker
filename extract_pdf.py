import sys
import os

try:
    import PyPDF2
    has_pypdf2 = True
except ImportError:
    has_pypdf2 = False

try:
    import pypdf
    has_pypdf = True
except ImportError:
    has_pypdf = False

pdf_path = "Tiny Conflict 3012 Rules V1.1.pdf"

if not os.path.exists(pdf_path):
    print(f"PDF file not found: {pdf_path}")
    sys.exit(1)

text_content = []

if has_pypdf2:
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page_num in range(min(50, len(pdf_reader.pages))):  # First 50 pages
                page = pdf_reader.pages[page_num]
                text_content.append(page.extract_text())
        print("\n".join(text_content))
    except Exception as e:
        print(f"Error with PyPDF2: {e}")
        if has_pypdf:
            try:
                with open(pdf_path, 'rb') as file:
                    pdf_reader = pypdf.PdfReader(file)
                    for page_num in range(min(50, len(pdf_reader.pages))):
                        page = pdf_reader.pages[page_num]
                        text_content.append(page.extract_text())
                print("\n".join(text_content))
            except Exception as e2:
                print(f"Error with pypdf: {e2}")
elif has_pypdf:
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = pypdf.PdfReader(file)
            for page_num in range(min(50, len(pdf_reader.pages))):
                page = pdf_reader.pages[page_num]
                text_content.append(page.extract_text())
        print("\n".join(text_content))
    except Exception as e:
        print(f"Error with pypdf: {e}")
else:
    print("Neither PyPDF2 nor pypdf is installed.")
    print("Please install one: pip install PyPDF2 or pip install pypdf")

