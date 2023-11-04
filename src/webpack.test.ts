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

const nonTestdata = /^[\.\/]*testdata.*$/;

describe('nonTestdata matches path in the import section', () => {
  it('starting with `testdata` (covers alias usage)', () => {
    expect(nonTestdata.test('testdata')).toBeTruthy();
    expect(nonTestdata.test('testdata/somedata')).toBeTruthy();
    expect(nonTestdata.test('testdata/some/data')).toBeTruthy();
  });
  it('import from testdata folder using diggingout `../`', () => {
    expect(nonTestdata.test('../testdata/somedata')).toBeTruthy();
    expect(nonTestdata.test('../../../testdata/somedata')).toBeTruthy();
  });
});

describe('demonstrate test data usage', () => {
  it('somedata property value is 1', () => {
    expect(data.p1).toBe(1);
  });
});
