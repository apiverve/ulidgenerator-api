from setuptools import setup, find_packages

setup(
    name='apiverve_ulidgenerator',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='ULID Generator creates Universally Unique Lexicographically Sortable Identifiers that order records chronologically. Pass an optional batch count and millisecond timestamp to produce 26-character collision-resistant unique IDs with format details.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/ulidgenerator?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
