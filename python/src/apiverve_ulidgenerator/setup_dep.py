from setuptools import setup, find_packages

setup(
    name='apiverve_ulidgenerator',
    version='1.1.12',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='ULID Generator is a tool for generating Universally Unique Lexicographically Sortable Identifiers (ULIDs). ULIDs are 26-character strings that are sortable by time and collision-resistant.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
