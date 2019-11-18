const { expect } = require("chai");
const { result } = require("./01. Request Validator");


    it("Test 1 from Word.docx", function () {
        let expected = {
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: '',
        };
        let test = () => result({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: '',
        });
        expect(test).to.be.eql(expected);
    });

    it("Test 2 from Word.docx", () => {
        let expectedMsg = "Invalid request header: Invalid Method";
        let test = () => result({
            method: 'OPTIONS',
            uri: 'git.master',
            version: 'HTTP/1.1',
            message: '-recursive'
        });
        expect(test).to.throw(Error, expectedMsg);
    });

    it("Test 3 from Word.docx", () => {
        let expectedMsg = "Invalid request header: Invalid Version";
        let test = () => result({
            method: 'POST',
            uri: 'home.bash',
            message: 'rm -rf /*'
        });
        expect(test).to.throw(Error, expectedMsg);
    });