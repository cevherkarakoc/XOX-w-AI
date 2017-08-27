import {expect} from 'chai';

import Tree from "../../src/ai/tree";

describe('Tree Structure', () => {
    let testTree;

  beforeEach(() => {
    testTree = new Tree();
  })

  it('should start with score zero', () => {
    const expectedScore = 0;
    expect(testTree.score).to.equal(expectedScore);
  })

  it('should start with empty childeren', () => {
    const expectedChildrenLength = 0;
    expect(testTree.children.length).to.equal(expectedChildrenLength);
  })

  it('should add child', () => {
    const expectedChildrenLength = 1;
    testTree.addChild(new Tree());
    expect(testTree.children.length).to.equal(expectedChildrenLength);
  })

  it('should return max child', () => {
    const expectedScore = 1001;
    const tree1 = new Tree();
    const tree2 = new Tree();
    const tree3 = new Tree();

    tree1.score = 7;
    tree2.score = expectedScore;
    tree3.score = 42;

    testTree.addChild(tree1);
    testTree.addChild(tree2);
    testTree.addChild(tree3);

    const child = testTree.getMaxChild();
    expect(child.score).to.equal(expectedScore);
  })

  it('should return min child', () => {
    const expectedScore = 3;
    const tree1 = new Tree();
    const tree2 = new Tree();
    const tree3 = new Tree();

    tree1.score = 7;
    tree2.score = expectedScore;
    tree3.score = 42;

    testTree.addChild(tree1);
    testTree.addChild(tree2);
    testTree.addChild(tree3);

    const child = testTree.getMinChild();
    expect(child.score).to.equal(expectedScore);
  })

})
