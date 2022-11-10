export const offsets = {
  button: {
    inSpeed: 0x0763f998,               // [Buttons]                        -> in_speed
    inAttack: 0x0763f9f0               // [Buttons]                        -> in_attack
  },
  core: {
    levelName: BigInt(0x1431a28),     // [Miscellaneous]                  -> LevelName
    clEntityList: BigInt(0x1a75038),  // [Miscellaneous]                  -> cl_entitylist
    localPlayer: BigInt(0x1ebe3e8)    // [Miscellaneous]                  -> LocalPlayer
  },
  entity: {
    localOrigin: 0x158,               // [DataMap.CBaseViewModel]         -> m_localOrigin
    iSignifierName: 0x580,            // [RecvTable.DT_BaseEntity]        -> m_iSignifierName
    lastVisibleTime: 0x1a70           // [Miscellaneous]                  -> CPlayer!lastVisibleTime
  },
  item: {
    highlightFunctionBits: 0x2c0,     // [RecvTable.DT_HighlightSettings] -> m_highlightFunctionBits
    customScriptInt: 0x1648           // [RecvTable.DT_PropSurvival]      -> m_customScriptInt
  },
  player: {
    glowEnable: 0x3c8,                // [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x8
    glowThroughWall: 0x3d0,           // [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x10
    iTeamNum: 0x044c,                  // [RecvTable.DT_BaseEntity]        -> m_iTeamNum
    iName: 0x589,                     // [RecvTable.DT_BaseEntity]        -> m_iName
    lifeState: 0x798,                 // [RecvTable.DT_Player]            -> m_lifeState
    vecPunchWeaponAngle: 0x2488,      // [DataMap.C_Player]               -> m_currentFrameLocalPlayer.m_vecPunchWeapon_Angle
    viewAngle: 0x2584,                // [DataMap.C_Player]               -> m_ammoPoolCapacity - 0x14
    bleedoutState: 0x2718             // [RecvTable.DT_Player]            -> m_bleedoutState
  }
};
