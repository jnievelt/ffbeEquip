class EnnemyStats {
    constructor(races, def, spr, elementalResists, breaks, buffs, breakability, imperils) {
        this.races = races;
        this.def = def;
        this.spr = spr;
        this.elementalResists = elementalResists;
        this.breaks = breaks;
        this.buffs = buffs;
        this.breakability = breakability;
        this.imperils = imperils;
    }
    
    static copy(ennemyStats) {
        return new EnnemyStats(
            ennemyStats.races,
            ennemyStats.def,
            ennemyStats.spr,
            ennemyStats.elementalResists,
            {
                "atk":ennemyStats.breaks.atk,
                "def":ennemyStats.breaks.def,
                "mag":ennemyStats.breaks.mag,
                "spr":ennemyStats.breaks.spr
            },
            {
                "atk":ennemyStats.buffs.atk,
                "def":ennemyStats.buffs.def,
                "mag":ennemyStats.buffs.mag,
                "spr":ennemyStats.buffs.spr
            },
            {
                "atk":ennemyStats.breakability.atk,
                "def":ennemyStats.breakability.def,
                "mag":ennemyStats.breakability.mag,
                "spr":ennemyStats.breakability.spr
            },
            {
                "fire":ennemyStats.imperils.fire, 
                "ice":ennemyStats.imperils.ice, 
                'lightning':ennemyStats.imperils.lightning, 
                'water':ennemyStats.imperils.water, 
                'earth':ennemyStats.imperils.earth, 
                'wind':ennemyStats.imperils.wind, 
                'light':ennemyStats.imperils.light, 
                'dark':ennemyStats.imperils.dark
            }
        );
    }
}