import {data} from 'testdata/somedata';

// Jest will fail if there are no tests that is why instead of providing
// useless examples like implementing sum() function and then testing it
// we better demonstrate in the template the fact Jest works fine on
// something useful, like for example testing a regular expression
// that is used to filter filenames for ts-loader
const nonTestFiles = /^.*(?!\.test).{5,5}\.tsx?$/;

describe('nonTestFiles matches file names', () => {
  it('ending with .ts and tsx', () => {
    expect('somefile.ts'.match(nonTestFiles)[0]).toEqual('somefile.ts');
    expect('somefile.tsx'.match(nonTestFiles)[0]).toEqual('somefile.tsx');
  });
  it('not ending with .test.ts and .test.tsx', () => {
    expect('somefile.test.ts'.match(nonTestFiles)).toBeNull();
    expect('somefile.test.tsx'.match(nonTestFiles)).toBeNull();
  });
  it('including word test in the filename but not as .test.ts', () => {
    expect('somefilewithtest.ts'.match(nonTestFiles)[0])
      .toEqual('somefilewithtest.ts');
    expect('some-test-file.tsx'.match(nonTestFiles)[0])
      .toEqual('some-test-file.tsx');
    expect('some.test.file.tsx'.match(nonTestFiles)[0])
      .toEqual('some.test.file.tsx');
  });
});

const testdata = /^[\.\/]*testdata.*$/;

describe('testdata matches path in the import section', () => {
  it('starting with `testdata` (covers alias usage)', () => {
    expect(testdata.test('testdata')).toBeTruthy();
    expect(testdata.test('testdata/somedata')).toBeTruthy();
    expect(testdata.test('testdata/some/data')).toBeTruthy();
  });
  it('import from testdata folder using diggingout `../`', () => {
    expect(testdata.test('../testdata/somedata')).toBeTruthy();
    expect(testdata.test('../../../testdata/somedata')).toBeTruthy();
  });
});

describe('demonstrate test data usage', () => {
  it('somedata property value is 1', () => {
    expect(data.p1).toBe(1);
  });
});

const testFiles = /^.*\.test(\.(tsx?|jsx?))?$/;

describe('testFiles matches path in the import section', () => {
  // because in the import the extension maybe skipped
  it('for test files ending with .test', () => {
    expect('somefile.test'.match(testFiles)[0])
      .toEqual('somefile.test');
  });
  it('for test files ending with .test.ts', () => {
    expect('somefile.test.ts'.match(testFiles)[0])
      .toEqual('somefile.test.ts');
  });
  it('for test files ending with .test.ts with word test in filename', () => {
    expect('somefiletest.test.ts'.match(testFiles)[0])
      .toEqual('somefiletest.test.ts');
  });
  it('for test files ending with .test.tsx', () => {
    expect('somefile.test.tsx'.match(testFiles)[0])
      .toEqual('somefile.test.tsx');
  });
  it('for test files ending with .test.tsx with word test in filename', () => {
    expect('somefiletest.test.tsx'.match(testFiles)[0])
      .toEqual('somefiletest.test.tsx');
  });
  it('for test files ending with .test.js', () => {
    expect('somefile.test.js'.match(testFiles)[0])
      .toEqual('somefile.test.js');
  });
  it('for test files ending with .test.js with word test in filename', () => {
    expect('somefiletest.test.js'.match(testFiles)[0])
      .toEqual('somefiletest.test.js');
  });
  it('for test files ending with .test.jsx', () => {
    expect('somefile.test.jsx'.match(testFiles)[0])
      .toEqual('somefile.test.jsx');
  });
  it('for test files ending with .test.jsx with word test in filename', () => {
    expect('somefiletest.test.jsx'.match(testFiles)[0])
      .toEqual('somefiletest.test.jsx');
  });
});
