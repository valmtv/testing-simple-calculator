// Jest will fail if there are no tests that is why instead of providing
// useless examples like implementing sum() function and then testing it
// we better demonstrate in the template the fact Jest works fine on
// something useful, like for example testing a regular expression
// that is used to filter filenames for ts-loader
const r = /^.*(?!\.test).{5,5}\.tsx?$/;

describe('r matches file names', () => {
  it('ending with .ts and tsx', () => {
    expect('somefile.ts'.match(r)[0]).toEqual('somefile.ts');
    expect('somefile.tsx'.match(r)[0]).toEqual('somefile.tsx');
  });
  it('not ending with .test.ts and .test.tsx', () => {
    expect('somefile.test.ts'.match(r)).toBeNull();
    expect('somefile.test.tsx'.match(r)).toBeNull();
  });
  it('including word test in the filename but not as .test.ts', () => {
    expect('somefilewithtest.ts'.match(r)[0]).toEqual('somefilewithtest.ts');
    expect('some-test-file.tsx'.match(r)[0]).toEqual('some-test-file.tsx');
    expect('some.test.file.tsx'.match(r)[0]).toEqual('some.test.file.tsx');
  });
});
